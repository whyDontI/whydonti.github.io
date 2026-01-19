// Portfolio data - Add new projects here!
// Just copy this template and fill in your details:
/*
{
    date: "Month Year",                    // e.g., "Dec 2025"
    title: "Project Name",                 // Main title
    description: "Brief description",      // 1-2 sentences
    tags: ["Tech1", "Tech2"],             // Technologies used
    links: [                              // Optional links
        { text: "View Source", url: "https://github.com/..." },
        { text: "Live Demo", url: "https://..." }
    ]
}
*/

const portfolioCommits = [
    {
        hash: "8f3e1a2",
        date: "Oct 2023 - Present",
        title: "Full Stack Engineer - Vividly",
        description: "",
        tags: ["Rust", "JavaScript", "Python"],
        links: []
    },
    {
        hash: "",
        date: "Feb 2021 - Sep 2023",
        title: "Founding Engineer - StrainBrain",
        description: "",
        tags: ["JavaScript", "TypeScript"],
        links: []
    },
];

// Generate random hash if not provided
function generateRandomHash() {
    const chars = 'abcdef0123456789';
    let hash = '';
    for (let i = 0; i < 7; i++) {
        hash += chars[Math.floor(Math.random() * chars.length)];
    }
    return hash;
}

// Ensure all commits have hashes
portfolioCommits.forEach(commit => {
    if (!commit.hash) {
        commit.hash = generateRandomHash();
    }
});