function calculateParallelogram() {
    // get parallelogram base value
    const parallelogramBaseInput = document.getElementById('input-base-paral');
    const parallelogramBaseText = parallelogramBaseInput.value;
    const paralBase = parseFloat(parallelogramBaseText);

    // get parallelogram height value
    const parallelogramHeightInput = document.getElementById('input-height-paral');
    const parallelogramHeightText = parallelogramHeightInput.value;
    const paralHeight = parseFloat(parallelogramHeightText);

    // get parallelogram area
    const paralArea = paralBase * paralHeight;

    // display parallelogram area
    const parallelogramArea = document.getElementById('parallelogram-area');
    parallelogramArea.innerText = paralArea;
}