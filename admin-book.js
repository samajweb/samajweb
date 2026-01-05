// admin-book.js - Samaj Book Content Editor
class SamajBookAdmin {
    constructor() {
        this.bookData = window.samajBookData || {};
        this.initAdminPanel();
    }

    initAdminPanel() {
        // Create admin controls if not exists
        if (!document.getElementById('adminControls')) {
            this.createAdminPanel();
        }
        
        this.bindAdminEvents();
    }

    createAdminPanel() {
        const adminPanel = document.createElement('div');
        adminPanel.id = 'adminControls';
        adminPanel.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.2);
            padding: 20px;
            z-index: 1000;
            width: 300px;
            display: none;
        `;

        adminPanel.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <h3 style="margin: 0; color: #2c3e50;">📚 Book Editor</h3>
                <button id="closeAdmin" style="background: none; border: none; font-size: 20px; cursor: pointer;">&times;</button>
            </div>
            
            <div class="admin-section">
                <h4>Add New Page</h4>
                <select id="pageType" style="width: 100%; padding: 8px; margin-bottom: 10px;">
                    <option value="text-only">Text Only</option>
                    <option value="image-text">Image + Text</option>
                    <option value="table">Table</option>
                    <option value="gallery">Gallery</option>
                    <option value="contact">Contact Info</option>
                </select>
                
                <input type="text" id="pageTitle" placeholder="Page Title" style="width: 100%; padding: 8px; margin-bottom: 10px;">
                
                <div id="pageTypeOptions">
                    <!-- Dynamic options based on page type -->
                </div>
                
                <button id="addPageBtn" style="width: 100%; padding: 10px; background: #3498db; color: white; border: none; border-radius: 5px; cursor: pointer;">
                    Add New Page
                </button>
            </div>
            
            <div class="admin-section" style="margin-top: 20px;">
                <h4>Manage Pages</h4>
                <div id="pageList" style="max-height: 200px; overflow-y: auto;">
                    <!-- Pages list will be loaded here -->
                </div>
            </div>
            
            <div class="admin-section" style="margin-top: 20px;">
                <button id="exportBook" style="width: 100%; padding: 10px; background: #1abc9c; color: white; border: none; border-radius: 5px; cursor: pointer;">
                    Export Book Data
                </button>
                <button id="importBook" style="width: 100%; padding: 10px; background: #9b59b6; color: white; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px;">
                    Import Book Data
                </button>
            </div>
        `;

        document.body.appendChild(adminPanel);
        this.renderPageList();
    }

    bindAdminEvents() {
        // Admin toggle button
        const adminBtn = document.getElementById('adminToggle');
        if (!adminBtn) {
            const btn = document.createElement('button');
            btn.id = 'adminToggle';
            btn.innerHTML = '📝 Edit Book';
            btn.style.cssText = `
                position: fixed;
                top: 100px;
                right: 20px;
                background: #2c3e50;
                color: white;
                border: none;
                padding: 10px 15px;
                border-radius: 5px;
                cursor: pointer;
                z-index: 999;
                box-shadow: 0 2px 10px rgba(0,0,0,0.2);
            `;
            document.body.appendChild(btn);
            
            btn.addEventListener('click', () => {
                const panel = document.getElementById('adminControls');
                panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
            });
        }

        // Close admin panel
        document.getElementById('closeAdmin').addEventListener('click', () => {
            document.getElementById('adminControls').style.display = 'none';
        });

        // Page type change
        document.getElementById('pageType').addEventListener('change', (e) => {
            this.renderPageTypeOptions(e.target.value);
        });

        // Add page button
        document.getElementById('addPageBtn').addEventListener('click', () => {
            this.addNewPage();
        });

        // Export button
        document.getElementById('exportBook').addEventListener('click', () => {
            this.exportBookData();
        });

        // Import button
        document.getElementById('importBook').addEventListener('click', () => {
            this.importBookData();
        });

        // Initialize page type options
        this.renderPageTypeOptions('text-only');
    }

    renderPageTypeOptions(type) {
        const container = document.getElementById('pageTypeOptions');
        let html = '';
        
        switch(type) {
            case 'text-only':
                html = `
                    <textarea id="pageContent" placeholder="Page content (HTML allowed)" 
                        style="width: 100%; height: 150px; padding: 8px; margin-bottom: 10px;"></textarea>
                `;
                break;
                
            case 'image-text':
                html = `
                    <select id="imageLayout" style="width: 100%; padding: 8px; margin-bottom: 10px;">
                        <option value="left-image">Image Left, Text Right</option>
                        <option value="right-image">Text Left, Image Right</option>
                    </select>
                    <input type="text" id="imageUrl" placeholder="Image URL" 
                        style="width: 100%; padding: 8px; margin-bottom: 10px;">
                    <input type="text" id="imageAlt" placeholder="Image Description" 
                        style="width: 100%; padding: 8px; margin-bottom: 10px;">
                    <input type="text" id="imageCaption" placeholder="Image Caption (optional)" 
                        style="width: 100%; padding: 8px; margin-bottom: 10px;">
                    <textarea id="pageContent" placeholder="Text content (HTML allowed)" 
                        style="width: 100%; height: 150px; padding: 8px; margin-bottom: 10px;"></textarea>
                `;
                break;
                
            case 'table':
                html = `
                    <textarea id="tableHeaders" placeholder="Table headers (comma separated)" 
                        style="width: 100%; padding: 8px; margin-bottom: 10px;">Position, Name, Contact, Tenure</textarea>
                    <textarea id="tableRows" placeholder="Table rows (one per line, comma separated)" 
                        style="width: 100%; height: 150px; padding: 8px; margin-bottom: 10px;">
President,Rajesh Sharma,president@samaj.org,2024-2026
Secretary,Amit Patel,secretary@samaj.org,2024-2026
Treasurer,Sunil Gupta,treasurer@samaj.org,2024-2026</textarea>
                    <input type="text" id="tableNotes" placeholder="Table notes (optional)" 
                        style="width: 100%; padding: 8px; margin-bottom: 10px;">
                `;
                break;
                
            case 'gallery':
                html = `
                    <textarea id="galleryImages" placeholder="Gallery images (one per line: URL|Alt Text|Caption)" 
                        style="width: 100%; height: 150px; padding: 8px; margin-bottom: 10px;">
https://example.com/image1.jpg|Event 1|Annual Diwali Celebration
https://example.com/image2.jpg|Event 2|Cultural Performance
https://example.com/image3.jpg|Event 3|Sports Tournament</textarea>
                `;
                break;
                
            case 'contact':
                html = `
                    <textarea id="pageContent" placeholder="Contact content (HTML allowed)" 
                        style="width: 100%; height: 150px; padding: 8px; margin-bottom: 10px;">
<div class="contact-info-grid">
    <div class="contact-item">
        <h4>📞 Phone Numbers</h4>
        <p>Office: 022-12345678</p>
        <p>President: 98765 43210</p>
    </div>
</div></textarea>
                `;
                break;
        }
        
        container.innerHTML = html;
    }

    addNewPage() {
        const type = document.getElementById('pageType').value;
        const title = document.getElementById('pageTitle').value;
        
        if (!title.trim()) {
            alert('Please enter a page title');
            return;
        }
        
        let pageData = {
            id: `page_${Date.now()}`,
            type: type,
            title: title
        };
        
        switch(type) {
            case 'text-only':
                const content = document.getElementById('pageContent').value;
                if (!content.trim()) {
                    alert('Please enter page content');
                    return;
                }
                pageData.content = content;
                break;
                
            case 'image-text':
                const layout = document.getElementById('imageLayout').value;
                const imageUrl = document.getElementById('imageUrl').value;
                const imageAlt = document.getElementById('imageAlt').value;
                const imageCaption = document.getElementById('imageCaption').value;
                const textContent = document.getElementById('pageContent').value;
                
                if (!imageUrl.trim() || !textContent.trim()) {
                    alert('Please enter both image URL and text content');
                    return;
                }
                
                pageData.layout = layout;
                pageData.image = {
                    url: imageUrl,
                    alt: imageAlt,
                    caption: imageCaption
                };
                pageData.content = textContent;
                break;
                
            case 'table':
                const headers = document.getElementById('tableHeaders').value.split(',').map(h => h.trim());
                const rowsText = document.getElementById('tableRows').value;
                const notes = document.getElementById('tableNotes').value;
                
                if (!headers.length || !rowsText.trim()) {
                    alert('Please enter table headers and rows');
                    return;
                }
                
                const rows = rowsText.split('\n')
                    .filter(row => row.trim())
                    .map(row => row.split(',').map(cell => cell.trim()));
                
                pageData.table = {
                    headers: headers,
                    rows: rows
                };
                if (notes.trim()) {
                    pageData.notes = notes;
                }
                break;
                
            case 'gallery':
                const imagesText = document.getElementById('galleryImages').value;
                if (!imagesText.trim()) {
                    alert('Please enter gallery images');
                    return;
                }
                
                const images = imagesText.split('\n')
                    .filter(line => line.trim())
                    .map(line => {
                        const parts = line.split('|').map(p => p.trim());
                        return {
                            url: parts[0] || '',
                            alt: parts[1] || '',
                            caption: parts[2] || ''
                        };
                    });
                
                pageData.images = images;
                break;
                
            case 'contact':
                const contactContent = document.getElementById('pageContent').value;
                if (!contactContent.trim()) {
                    alert('Please enter contact information');
                    return;
                }
                pageData.content = contactContent;
                break;
        }
        
        // Add page to book
        if (window.SamajBookManager && window.SamajBookManager.addNewPage) {
            const newPage = window.SamajBookManager.addNewPage(pageData);
            if (newPage) {
                alert('Page added successfully!');
                this.clearForm();
                this.renderPageList();
            }
        }
    }

    clearForm() {
        document.getElementById('pageTitle').value = '';
        document.getElementById('pageType').value = 'text-only';
        this.renderPageTypeOptions('text-only');
    }

    renderPageList() {
        const container = document.getElementById('pageList');
        if (!container) return;
        
        const pages = this.bookData.pages.filter(p => p.type !== 'cover' && p.type !== 'backcover');
        
        let html = '<ul style="list-style: none; padding: 0; margin: 0;">';
        pages.forEach((page, index) => {
            html += `
                <li style="padding: 8px; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; align-items: center;">
                    <span>${page.title || `Page ${index + 1}`}</span>
                    <div>
                        <button onclick="samajBookAdmin.editPage('${page.id}')" style="background: #3498db; color: white; border: none; padding: 4px 8px; border-radius: 3px; cursor: pointer; margin-right: 5px;">Edit</button>
                        <button onclick="samajBookAdmin.deletePage('${page.id}')" style="background: #e74c3c; color: white; border: none; padding: 4px 8px; border-radius: 3px; cursor: pointer;">Delete</button>
                    </div>
                </li>
            `;
        });
        html += '</ul>';
        
        container.innerHTML = html;
    }

    editPage(pageId) {
        // Implementation for editing page
        alert('Edit functionality would open a modal with page details');
    }

    deletePage(pageId) {
        if (confirm('Are you sure you want to delete this page?')) {
            // Implementation for deleting page
            alert('Delete functionality would remove the page');
        }
    }

    exportBookData() {
        const dataStr = JSON.stringify(this.bookData.exportForPDF(), null, 2);
        const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
        
        const exportFileDefaultName = `samaj-book-${new Date().toISOString().split('T')[0]}.json`;
        
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
    }

    importBookData() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        
        input.onchange = e => {
            const file = e.target.files[0];
            const reader = new FileReader();
            
            reader.onload = event => {
                try {
                    const importedData = JSON.parse(event.target.result);
                    // Validate and merge imported data
                    this.mergeImportedData(importedData);
                    alert('Book data imported successfully!');
                    location.reload();
                } catch (error) {
                    alert('Error importing book data: ' + error.message);
                }
            };
            
            reader.readAsText(file);
        };
        
        input.click();
    }

    mergeImportedData(importedData) {
        // Basic validation
        if (!importedData.pages || !Array.isArray(importedData.pages)) {
            throw new Error('Invalid book data format');
        }
        
        // Update localStorage or send to server
        localStorage.setItem('samajBookData', JSON.stringify(importedData));
        
        // Update in-memory data
        this.bookData = importedData;
        window.samajBookData = importedData;
    }
}

// Initialize admin panel when in edit mode
if (window.location.search.includes('edit=true')) {
    document.addEventListener('DOMContentLoaded', () => {
        window.samajBookAdmin = new SamajBookAdmin();
    });
}