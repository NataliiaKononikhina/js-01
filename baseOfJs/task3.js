const formatDate = () => {
    const dateFromInput = document.getElementById('dataInput').value;
    const dataFormattedDiv = document.getElementById('data-formatted');

    const formattedDate = dateFromInput.split('-').reverse().join('.');

    dataFormattedDiv.innerText = formattedDate;
}