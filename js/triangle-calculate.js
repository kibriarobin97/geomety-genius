function calculateTriangle() {
    // get triangle base value
    const triangleBaseInput = document.getElementById('input-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);

    // get triangle height value
    const triangleHeightInput = document.getElementById('input-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);

    // get triangle area
    const area = 0.5 * base * height;

    // display triangle area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
}