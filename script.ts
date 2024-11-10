document.addEventListener('DOMContentLoaded', () => {
    // Function to setup a toggle button for a given section
    const setupToggle = (buttonId: string, contentId: string) => {
        const button = document.getElementById(buttonId) as HTMLButtonElement;
        const content = document.getElementById(contentId) as HTMLDivElement;

        if (button && content) {
            button.addEventListener('click', () => {
                if (content.classList.contains('hidden')) {
                    content.classList.remove('hidden');
                    button.textContent = ` ${contentId.replace('content', '').replace('-', ' ').replace('-', ' ').toUpperCase()}`;
                } else {
                    content.classList.add('hidden');
                    button.textContent = `SHOW ${contentId.replace('content', '').replace('-', ' ').replace('-', ' ').toUpperCase()}`;
                }
            });
        }
    };

    // Setup toggle functionality for each section
    setupToggle('toggle-education', 'education-content');
    setupToggle('toggle-skills', 'skills-content');
    setupToggle('toggle-work-experience', 'work-experience-content');
    setupToggle('toggle-certifications', 'certifications-content');
    setupToggle('toggle-personal-details', 'personal-details-content');
});
