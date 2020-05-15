const calcTriangle = () => {
    const resultDiv = document.getElementById('result');
    const triangleSide = document.getElementById('triangleSideInput').value;

    const area = triangleSide ** 2 * Math.sqrt(3) / 4;

    resultDiv.innerText = `Площадь правильного треугольника ${area}`;
}