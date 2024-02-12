function calculateRectangle() {
    // get rectangle width value
    const rectangleWidthInput = document.getElementById('input-width');
    const rectangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText);

    // get rectangle length value
    const rectangleLengthInput = document.getElementById('input-length');
    const rectangleLengthText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthText);

    // get rectangle area
    const rectangleArea = width * length;

    // display rectangle area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = rectangleArea;

}