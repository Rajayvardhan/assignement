

function showContent(component) {
    let contentDiv = document.getElementById('content');
    let content = '';

    if (component === 'Home') {
        content = '<h2>Home</h2><p>This is the home page content.</p>';
    } else if (component === 'Contact') {
        content = '<h2>Contact</h2><p>Contact information goes here.</p>';
    } else if (component === 'Information') {
        content = '<h2>Information</h2><p>Additional information is displayed here.</p>';
    } else if (component === 'Guide') {
        content = '<h2>Guide</h2><p>Guidance and instructions are provided in this section.</p>';
    }

    contentDiv.innerHTML = content;
}
