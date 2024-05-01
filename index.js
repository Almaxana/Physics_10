function CountFunction() {
    let n = document.getElementById("n").value;
    let L = document.getElementById("L").value;
    let lambda = document.getElementById("lambda").value * Math.pow(10, -9);
    let d = document.getElementById("d").value*Math.pow(10, -3);

    let messageElement = document.getElementById("message");
    if (L == 0 || lambda == 0 || d == 0){
        messageElement.textContent = "Ошибка: нулевое значение";
        
        return false;
    }
    
    let x = [];
    let intensity = [];
    
    let step = lambda*L/d/n
    let stepNumber = 10
    for (let i = -step*stepNumber; i < step*stepNumber; i+=step/100) {
        x.push(i);
        intensity.push(2*(1 + Math.cos(2*Math.PI*i*d*n/lambda/L)));
    }
    let z = []
    for (let i = 0; i < 200; i++) {
        z.push(intensity)
    }

    let layout = {
        title: 'Интерференционная картина',
        xaxis: {
            title: 'x, м'
        },
        yaxis: {
            visible: false, 
            showticklabels: false
        },
        
    };
    Plotly.newPlot(
        "myDiv",
        [{
            x: x,
            z: z,
            type: 'heatmap',
            colorscale: 'Greys',
            colorbar: {
                title: 'Интенсивность, Вт/м^2',
            }
        }],
        layout
    );
    
    return false;
}
