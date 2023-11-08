const updateColors = () => {
    const colors = [
        {
            color: '#16a085',
        },
        {
            color: '#27ae60',
        },
        {
            color: '#2c3e50',
        },
        {
            color: '#f39c12',
        },
        {
            color: '#e74c3c',
        },
        {
            color: '#9b59b6',
        },
        {
            color: '#FB6964',
        },
        {
            color: '#342224',
        },
        {
            color: '#472E32',
        },
        {
            color: '#BDBB99',
        },
    ];

    const randomColors = colors[Math.floor(Math.random() * colors.length)];
    document.documentElement.style.setProperty('--color', randomColors.color);

};


export default updateColors;