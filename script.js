document.addEventListener('DOMContentLoaded', function () {
    // Function to setup a toggle button for a given section
    var setupToggle = function (buttonId, contentId) {
        var button = document.getElementById(buttonId);
        var content = document.getElementById(contentId);
        if (button && content) {
            button.addEventListener('click', function () {
                if (content.classList.contains('hidden')) {
                    content.classList.remove('hidden');
                    button.textContent = " ".concat(contentId.replace('content', '').replace('-', ' ').replace('-', ' ').toUpperCase());
                }
                else {
                    content.classList.add('hidden');
                    button.textContent = "SHOW ".concat(contentId.replace('content', '').replace('-', ' ').replace('-', ' ').toUpperCase());
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
