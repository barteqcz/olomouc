function submitter() {
    // Get form inputs
    var title = document.getElementById("input-text-title").value;
    var content = document.getElementById("input-text-content").value;
    var image = document.getElementById("input-image").value;

    // Clone template content
    var templateContent = document.getElementById("articleTemplate").content.cloneNode(true);

    // Fill in template with form data
    templateContent.querySelector("#articleTitle").textContent = title;
    templateContent.querySelector("#articleContent").textContent = content;

    // Set the src attribute of the image element
    templateContent.querySelector("#articleImage").src = image;

    // Convert template content to string
    var htmlString = new XMLSerializer().serializeToString(templateContent);

    // Create Blob from HTML string
    var blob = new Blob([htmlString], { type: 'text/html' });

    // Create a temporary link element
    var link = document.createElement('a');
    link.download = 'clanek.html'; // Set the download filename
    link.href = window.URL.createObjectURL(blob); // Set the link URL to the Blob object
    link.click(); // Simulate a click on the link to trigger the download
}
