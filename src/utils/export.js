function exportToJson(questions) {
    return JSON.stringify(questions, null, 2);
}

function generateLatex(questions) {
    let latex = "\\documentclass[12pt]{article}\n";
    latex += "\\usepackage{amsmath}\n";
    latex += "\\usepackage{amssymb}\n";
    latex += "\\begin{document}\n";
    latex += "\\begin{enumerate}\n";

    questions.forEach((question, index) => {
        latex += `    \\item ${question.text}\n`;
        latex += "    \\begin{enumerate}[label=(\\alph*)]\n";
        question.options.forEach(option => {
            latex += `        \\item ${option}\n`;
        });
        latex += "    \\end{enumerate}\n";
    });

    latex += "\\end{enumerate}\n";
    latex += "\\end{document}\n";
    return latex;
}

export { exportToJson, generateLatex };