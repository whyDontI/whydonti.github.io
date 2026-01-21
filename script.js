// Main application logic
class GitPortfolio {
    constructor() {
        this.gitGraph = document.getElementById('git-graph');
        this.cliInput = document.getElementById('cli-input');
        this.terminalOutput = document.getElementById('terminal-output');
        this.cliOutput = document.getElementById('cli-output');
        this.commits = [];
        this.expandedCommit = null;
        this.introContent = '';

        this.init();
    }

    init() {
        this.startIntroSequence();
        this.setupEventListeners();
        this.setupCLI();
    }

    // Intro sequence with typing animation
    startIntroSequence() {
        const introText = "Hi there 👋, I'm Nikhil Bhandarkar\nFull-Stack Dev & Successful VIM Exiter\nI like to solve problems the hard way.";
        const commandsText = "\nAvailable commands:\n  help     - Show this help message\n  contact  - Display contact information\n  products - View my products\n  clear    - Collapse all expanded commits\n  ls       - List all projects\n  about    - Show portfolio information\n  show <hash> - Expand specific commit by hash";

        // Hide git graph initially
        this.gitGraph.style.display = 'none';

        // Type the intro text
        this.typeText(introText, 30, () => {
            // After intro, append commands to the existing text
            setTimeout(() => {
                this.typeText(commandsText, 20, () => {
                    setTimeout(() => {
                        this.introContent = introText + commandsText;
                        this.terminalOutput.innerHTML = this.introContent;
                        this.displayCliOutput("Initializing git log...");
                        setTimeout(() => {
                            this.showGitLog();
                        }, 800);
                    }, 1000);
                });
            }, 1500);
        });
    }

    // Typing animation function
    typeText(text, speed, callback) {
        let i = 0;
        const output = this.terminalOutput;

        const typeInterval = setInterval(() => {
            if (i < text.length) {
                output.textContent += text.charAt(i);
                i++;
                // Scroll both the terminal header and the page if needed
                const header = document.querySelector('.terminal-header');
                header.scrollTop = header.scrollHeight;
                window.scrollTo(0, 0);
            } else {
                clearInterval(typeInterval);
                if (callback) callback();
            }
        }, speed);
    }

    // Show the git log after intro
    showGitLog() {
        this.gitGraph.style.display = 'block';
        this.renderCommits();
        this.setupScrollAnimations();

        // Add a final message
        setTimeout(() => {
            this.displayCliOutput("🎉 Git log loaded! Click on any commit to explore my projects!");
        }, 500);
    }

    // Render all commits
    renderCommits() {
        this.gitGraph.innerHTML = '';

        portfolioCommits.forEach((commitData, index) => {
            const commitElement = this.createCommitElement(commitData, index);
            this.gitGraph.appendChild(commitElement);
            this.commits.push(commitElement);
        });

        // Trigger initial animation check
        setTimeout(() => this.checkScrollVisibility(), 100);
    }

    // Create a commit element
    createCommitElement(commitData, index) {
        const commit = document.createElement('div');
        commit.className = 'commit';
        commit.dataset.index = index;

        commit.innerHTML = `
            <div class="branch-line">
                <div class="commit-node"></div>
            </div>
            <div class="commit-content">
                <div class="commit-header">
                    <span class="commit-hash">${commitData.hash}</span>
                    <span class="commit-message">${commitData.title}</span>
                    <span class="commit-date">${commitData.date}</span>
                </div>
                <div class="commit-details">
                    <div class="commit-description">${commitData.description}</div>
                    <div class="tech-tags">
                        ${commitData.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    ${commitData.links ? `
                        <div class="commit-links">
                            ${commitData.links.map(link =>
            `<a href="${link.url}" target="_blank" class="commit-link">${link.text}</a>`
        ).join('')}
                        </div>
                    ` : ''}
                </div>
            </div>
        `;

        // Add click handler
        commit.addEventListener('click', () => this.toggleCommitExpansion(commit, index));

        return commit;
    }

    // Toggle commit expansion
    toggleCommitExpansion(commitElement, index) {
        const isExpanded = commitElement.classList.contains('expanded');

        // Close currently expanded commit
        if (this.expandedCommit && this.expandedCommit !== commitElement) {
            this.expandedCommit.classList.remove('expanded');
        }

        // Toggle current commit
        commitElement.classList.toggle('expanded');

        if (commitElement.classList.contains('expanded')) {
            this.expandedCommit = commitElement;
        } else {
            this.expandedCommit = null;
        }
    }

    // Setup event listeners
    setupEventListeners() {
        // Handle clicks outside commits to close expanded ones
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.commit') && this.expandedCommit) {
                this.expandedCommit.classList.remove('expanded');
                this.expandedCommit = null;
            }
        });
    }

    // Setup scroll animations
    setupScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        this.commits.forEach(commit => {
            observer.observe(commit);
        });
    }

    // Check which commits are visible on scroll
    checkScrollVisibility() {
        const scrollTop = window.pageYOffset;
        const windowHeight = window.innerHeight;

        this.commits.forEach((commit, index) => {
            const rect = commit.getBoundingClientRect();
            const elementTop = rect.top + scrollTop;

            if (elementTop < scrollTop + windowHeight + 100) {
                setTimeout(() => {
                    commit.classList.add('visible');
                }, index * 100);
            }
        });
    }

    // Setup CLI functionality
    setupCLI() {
        this.cliInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const command = this.cliInput.value.trim().toLowerCase();
                this.executeCommand(command);
                this.cliInput.value = '';
            }
        });

        // Handle input focus/blur for cursor visibility
        this.cliInput.addEventListener('focus', () => {
            this.cliInput.nextElementSibling.style.opacity = '1';
        });

        this.cliInput.addEventListener('blur', () => {
            this.cliInput.nextElementSibling.style.opacity = '0';
        });

        // Focus CLI input on page load
        setTimeout(() => {
            this.cliInput.focus();
        }, 100);
    }

    // Execute CLI commands
    executeCommand(command) {
        let output = '';

        switch (command) {
            case 'help':
                output = `
Available commands:
  help     - Show this help message
  contact  - Display contact information
  products - View my products
  clear    - Collapse all expanded commits
  ls       - List all projects
  about    - Show portfolio information
                `;
                break;

            case 'contact':
                output = `
📧 Email: <span class="clickable-email" data-email="nikhil@example.com">nikhilbhandarkar1998@gmail.com</span>
💼 LinkedIn: <a href="https://www.linkedin.com/in/nikhil-bhandarkar/" target="_blank" class="contact-link">linkedin.com/in/nikhil-bhandarkar/</a>
🐙 GitHub: <a href="https://github.com/whydonti" target="_blank" class="contact-link">github.com/whydonti</a>
                `;
                break;

            case 'clear':
                // Collapse all expanded commits
                this.commits.forEach(commit => commit.classList.remove('expanded'));
                this.expandedCommit = null;
                output = 'All commits collapsed.';
                break;

            case 'ls':
                output = 'Projects:\n' + portfolioCommits.map(commit =>
                    `  ${commit.hash} - ${commit.title}`
                ).join('\n');
                break;

            case 'about':
                output = `
👋 Hi! I'm Nikhil Bhandarkar
💻 Full-Stack Dev, VIM exiter
🚀 Building stuff I like

I like to solve problems the hard way.
                `;
                break;

            case 'products':
                output = `
🛍️ Opening products page...
                `;
                // Open products page in new tab
                setTimeout(() => {
                    window.open('products/', '_blank');
                }, 500);
                break;

            default:
                if (command.startsWith('show ')) {
                    const hash = command.split(' ')[1];
                    const commitIndex = portfolioCommits.findIndex(c => c.hash === hash);
                    if (commitIndex !== -1) {
                        this.toggleCommitExpansion(this.commits[commitIndex], commitIndex);
                        output = `Showing details for commit ${hash}`;
                    } else {
                        output = `Commit ${hash} not found.`;
                    }
                } else {
                    output = `Command not found: ${command}. Type 'help' for available commands.`;
                }
        }

        this.displayCliOutput(output);
    }

    // Display terminal output (intro text)
    displayOutput(html) {
        // Always show intro content first, then the command output
        const fullContent = this.introContent ? this.introContent + "\n\n" + html : html;
        this.terminalOutput.innerHTML = fullContent;

        // Auto-scroll the terminal header
        const header = document.querySelector('.terminal-header');
        header.scrollTop = header.scrollHeight;

        // Add event listeners for clickable elements
        this.addClickableHandlers();
    }

    // Display CLI output (command responses)
    displayCliOutput(html) {
        this.cliOutput.innerHTML = html;
        // Auto-scroll the CLI output
        this.cliOutput.scrollTop = this.cliOutput.scrollHeight;
    }

    // Add click handlers for emails and links
    addClickableHandlers() {
        // Check both terminal output and CLI output for clickable elements
        const containers = [this.terminalOutput, this.cliOutput];

        containers.forEach(container => {
            if (!container) return;

            // Handle email clicks (copy to clipboard)
            const emailElements = container.querySelectorAll('.clickable-email');
            emailElements.forEach(element => {
                element.addEventListener('click', () => {
                    const email = element.dataset.email;
                    navigator.clipboard.writeText(email).then(() => {
                        // Temporarily show feedback
                        const originalText = element.textContent;
                        element.textContent = 'Copied!';
                        element.style.color = 'var(--text-success)';

                        setTimeout(() => {
                            element.textContent = originalText;
                            element.style.color = '';
                        }, 1000);
                    }).catch(err => {
                        console.error('Failed to copy email: ', err);
                        // Fallback for older browsers
                        const textArea = document.createElement('textarea');
                        textArea.value = email;
                        document.body.appendChild(textArea);
                        textArea.select();
                        document.execCommand('copy');
                        document.body.removeChild(textArea);

                        const originalText = element.textContent;
                        element.textContent = 'Copied!';
                        element.style.color = 'var(--text-success)';

                        setTimeout(() => {
                            element.textContent = originalText;
                            element.style.color = '';
                        }, 1000);
                    });
                });
                element.style.cursor = 'pointer';
                element.title = 'Click to copy email';
            });

            // Handle contact links (ensure they open in new tab)
            const linkElements = container.querySelectorAll('.contact-link');
            linkElements.forEach(link => {
                link.style.cursor = 'pointer';
                link.title = 'Opens in new tab';
            });
        });
    }
}

// Initialize the portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new GitPortfolio();
});

// Handle window resize for animations
window.addEventListener('resize', () => {
    // Re-check visibility on resize
    setTimeout(() => {
        const portfolio = document.querySelector('.git-graph');
        if (portfolio && portfolio.__portfolioInstance) {
            portfolio.__portfolioInstance.checkScrollVisibility();
        }
    }, 100);
});