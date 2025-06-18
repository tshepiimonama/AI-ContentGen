const streamOptions = {
  'Cybersecurity': ['Pentester', 'SOC', 'Ethical Hacker'],
  'AI': ['Neural Networks', 'Computer Vision'],
  'Cloud Computing': ['AWS', 'Azure', 'GCP'],
  'Blockchain': ['Smart Contracts', 'DeFi'],
  'Datascience': ['Statistics', 'Visualization'],
  'Machine Learning': ['Supervised', 'Unsupervised'],
  'Software Development/Engineer': ['Frontend', 'Backend', 'Full Stack'],
  'DevOps': ['CI/CD', 'Monitoring'],
  'Quality Tester': ['Manual', 'Automation']
};

function populateOptions() {
  const stream = document.getElementById('streamSelect').value;
  const optionSelect = document.getElementById('optionSelect');
  optionSelect.innerHTML = '<option value="">Select Option</option>';
  if (streamOptions[stream]) {
    streamOptions[stream].forEach(opt => {
      const option = document.createElement('option');
      option.value = opt;
      option.textContent = opt;
      optionSelect.appendChild(option);
    });
  }
}

async function generateContent() {
  const stream = document.getElementById('streamSelect').value;
  const option = document.getElementById('optionSelect').value;
  const search = document.getElementById('searchBar').value;
  const resultBox = document.getElementById('resultBox');

  if (!stream || !option) {
    resultBox.textContent = "Please select both stream and option.";
    return;
  }

  resultBox.textContent = "Generating content...";

  try {
    const response = await fetch('http://localhost:3000/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ stream, option, search })
    });

    const data = await response.json();

    if (data.content) {
      resultBox.textContent = data.content;
    } else {
      resultBox.textContent = "No content returned.";
    }
  } catch (error) {
    console.error("Error generating content:", error);
    resultBox.textContent = "Failed to generate content.";
  }
}

function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const content = document.getElementById('resultBox').textContent;
  const lines = doc.splitTextToSize(content, 180);
  doc.text(lines, 10, 10);
  doc.save('educational_material.pdf');
}
