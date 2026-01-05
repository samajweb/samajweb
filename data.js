// data.js - Samaj Book Content Management
const samajBookData = {
    // Book Metadata
    metadata: {
        title: "Shri Mumbai Purush Samaj - Official Book",
        subtitle: "Community History, Values & Activities",
        publishedDate: "2024",
        version: "1.0",
        lastUpdated: "December 2024"
    },

    // Table of Contents
    tableOfContents: [
        { id: "chapter1", title: "Our History", page: 1 },
        { id: "chapter2", title: "Mission & Vision", page: 3 },
        { id: "chapter3", title: "Committee Structure", page: 5 },
        { id: "chapter4", title: "Membership Benefits", page: 8 },
        { id: "chapter5", title: "Events Calendar", page: 12 },
        { id: "chapter6", title: "Hotel Partners", page: 15 },
        { id: "chapter7", title: "Gallery Highlights", page: 18 },
        { id: "chapter8", title: "Contact Information", page: 22 }
    ],

    // Book Chapters/Pages
    pages: [
        // Page 1 - Cover Page
        {
            id: "cover",
            pageNumber: 1,
            type: "cover",
            content: {
                title: "Shri Mumbai Purush Samaj",
                subtitle: "Official Community Book",
                year: "2024 Edition"
            },
            background: "#1a365d"
        },

        // Page 2 - History (Text Only)
        {
            id: "history",
            pageNumber: 2,
            type: "text-only",
            title: "Our History & Journey",
            content: `
                <h2>Founded in 1995</h2>
                <p>Shri Mumbai Purush Samaj was established by a group of visionary individuals who recognized the need for a platform where men could connect, grow, and contribute to society.</p>
                
                <h3>Early Beginnings</h3>
                <p>Starting with just 15 members in a small community hall, our organization has grown exponentially over the past 25+ years. What began as informal monthly gatherings has evolved into a structured community with over 500 active members.</p>
                
                <h3>Milestones</h3>
                <ul>
                    <li><strong>1995:</strong> Foundation established with 15 founding members</li>
                    <li><strong>2000:</strong> First permanent meeting place acquired</li>
                    <li><strong>2010:</strong> Membership crossed 300 members</li>
                    <li><strong>2015:</strong> 20th Anniversary Celebration</li>
                    <li><strong>2020:</strong> Digital transformation with website launch</li>
                    <li><strong>2024:</strong> Current membership: 500+ active members</li>
                </ul>
            `
        },

        // Page 3 - Image + Text Layout
        {
            id: "mission",
            pageNumber: 3,
            type: "image-text",
            layout: "left-image", // Options: left-image, right-image
            title: "Our Mission & Vision",
            image: {
                url: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                alt: "Community Service Activity",
                caption: "Annual Food Distribution Drive"
            },
            content: `
                <h3>Our Mission</h3>
                <p>To foster a supportive community of men dedicated to cultural preservation, professional development, and social service.</p>
                
                <h3>Core Values</h3>
                <ul>
                    <li><strong>Integrity:</strong> Conduct all activities with honesty and transparency</li>
                    <li><strong>Community:</strong> Believe in the power of collective growth</li>
                    <li><strong>Service:</strong> Commitment to serving members and society</li>
                    <li><strong>Growth:</strong> Foster continuous learning and development</li>
                </ul>
                
                <h3>Vision for 2030</h3>
                <p>To become Mumbais leading community organization, impacting 1000+ families through cultural, educational, and social initiatives.</p>
            `
        },

        // Page 4 - Committee Table
        {
            id: "committee",
            pageNumber: 4,
            type: "table",
            title: "Executive Committee 2024-2025",
            table: {
                headers: ["Position", "Name", "Contact", "Tenure"],
                rows: [
                    ["President", "Rajesh Sharma", "president@samaj.org", "2024-2026"],
                    ["Secretary", "Amit Patel", "secretary@samaj.org", "2024-2026"],
                    ["Treasurer", "Sunil Gupta", "treasurer@samaj.org", "2024-2026"],
                    ["Vice President", "Vikram Singh", "vicepresident@samaj.org", "2024-2026"],
                    ["Youth Wing Head", "Rohan Mehta", "youth@samaj.org", "2024-2025"],
                    ["Cultural Head", "Sanjay Kumar", "cultural@samaj.org", "2024-2025"]
                ]
            },
            notes: "*All committee members are elected for a 2-year term"
        },

        // Page 5 - Text + Image (Right Image)
        {
            id: "membership",
            pageNumber: 5,
            type: "image-text",
            layout: "right-image",
            title: "Membership Benefits",
            image: {
                url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                alt: "Networking Event",
                caption: "Monthly Business Networking Meet"
            },
            content: `
                <h3>Why Join Our Samaj?</h3>
                <p>Becoming a member opens doors to numerous opportunities and benefits:</p>
                
                <h4>Exclusive Benefits</h4>
                <ul>
                    <li>Access to all community events and workshops</li>
                    <li>Special discounts at partner hotels and restaurants</li>
                    <li>Business networking opportunities</li>
                    <li>Priority registration for cultural programs</li>
                    <li>Monthly newsletter with updates</li>
                </ul>
                
                <h4>Support System</h4>
                <ul>
                    <li>Personal and professional mentorship</li>
                    <li>Community support during emergencies</li>
                    <li>Educational assistance programs</li>
                    <li>Health and wellness initiatives</li>
                </ul>
            `
        },

        // Page 6 - Events Table
        {
            id: "events",
            pageNumber: 6,
            type: "table",
            title: "Annual Events Calendar",
            table: {
                headers: ["Event", "Date", "Time", "Venue", "Description"],
                rows: [
                    ["Annual Diwali Celebration", "November 12", "6:00 PM", "Samaj Bhawan", "Cultural performances, dinner, fireworks"],
                    ["Holi Milan Samaroh", "March 15", "10:00 AM", "Community Ground", "Color festival with traditional music"],
                    ["Business Networking", "Last Friday", "5:00 PM", "Conference Hall", "Monthly professional networking"],
                    ["Annual Picnic", "December 15", "9:00 AM", "National Park", "Family day with games and food"],
                    ["Health Camp", "Quarterly", "9:00 AM", "Health Center", "Free health checkups for members"],
                    ["Sports Tournament", "January 20", "8:00 AM", "Sports Complex", "Annual cricket and badminton"]
                ]
            }
        },

        // Page 7 - Multiple Images Gallery
        {
            id: "gallery",
            pageNumber: 7,
            type: "gallery",
            title: "Memorable Moments",
            images: [
                {
                    url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                    alt: "Diwali Celebration",
                    caption: "Annual Diwali Celebration 2023"
                },
                {
                    url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                    alt: "Cultural Event",
                    caption: "Traditional Dance Performance"
                },
                {
                    url: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                    alt: "Sports Event",
                    caption: "Cricket Tournament Finals"
                },
                {
                    url: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                    alt: "Workshop",
                    caption: "Educational Workshop Session"
                }
            ]
        },

        // Page 8 - Contact Info
        {
            id: "contact",
            pageNumber: 8,
            type: "contact",
            title: "Contact Information",
            content: `
                <div class="contact-info-grid">
                    <div class="contact-item">
                        <h4>📞 Phone Numbers</h4>
                        <p>Office: 022-12345678</p>
                        <p>President: 98765 43210</p>
                        <p>Secretary: 98765 43211</p>
                        <p>Emergency: 98765 43219</p>
                    </div>
                    
                    <div class="contact-item">
                        <h4>📧 Email Addresses</h4>
                        <p>General: info@mumbaipurushsamaj.org</p>
                        <p>Membership: membership@samaj.org</p>
                        <p>Events: events@samaj.org</p>
                        <p>Donations: donations@samaj.org</p>
                    </div>
                    
                    <div class="contact-item">
                        <h4>📍 Address</h4>
                        <p>Shri Mumbai Purush Samaj Bhawan</p>
                        <p>123 Cultural Street</p>
                        <p>Shivaji Park Area</p>
                        <p>Mumbai - 400028</p>
                    </div>
                    
                    <div class="contact-item">
                        <h4>🕒 Meeting Hours</h4>
                        <p>Every Sunday: 5 PM - 7 PM</p>
                        <p>Committee Meeting: 1st Saturday</p>
                        <p>General Body: Quarterly</p>
                    </div>
                </div>
            `
        },

        // Page 9 - Back Cover
        {
            id: "backcover",
            pageNumber: 9,
            type: "backcover",
            content: {
                quote: "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः।\nसर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत्॥",
                translation: "May all be happy, may all be free from illness.\nMay all see what is auspicious, may no one suffer.",
                footer: "© 2024 Shri Mumbai Purush Samaj. All rights reserved."
            },
            background: "#2c3e50"
        }
    ],

    // Function to add new page
    addPage: function(pageData) {
        // Auto-assign page number if not provided
        if (!pageData.pageNumber) {
            pageData.pageNumber = this.pages.length + 1;
        }
        
        this.pages.push(pageData);
        this.updateTableOfContents();
        return pageData;
    },

    // Function to update table of contents
    updateTableOfContents: function() {
        this.tableOfContents = this.pages
            .filter(page => page.type !== 'cover' && page.type !== 'backcover')
            .map((page, index) => ({
                id: page.id,
                title: page.title || `Chapter ${index + 1}`,
                page: page.pageNumber
            }));
    },

    // Function to export as PDF data
    exportForPDF: function() {
        return {
            metadata: this.metadata,
            tableOfContents: this.tableOfContents,
            pages: this.pages,
            totalPages: this.pages.length
        };
    }
};

// Initialize table of contents
samajBookData.updateTableOfContents();

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = samajBookData;
}