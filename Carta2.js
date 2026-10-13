const petalLayer = document.querySelector('.petal-layer');
const petals = [
	[4, -8, 17, 90, 13], [12, -15, 22, -65, 18], [19, -3, 19, 75, 11],
	[27, -20, 24, -95, 15], [34, -11, 18, 60, 12], [42, -6, 23, -80, 17],
	[49, -17, 20, 100, 11], [57, -1, 25, -55, 14], [64, -13, 19, 85, 18],
	[72, -22, 23, -100, 12], [79, -5, 21, 70, 15], [87, -18, 24, -75, 11],
	[95, -10, 18, 55, 16], [8, -24, 26, -90, 10], [31, -7, 22, 65, 13],
	[68, -16, 20, -60, 10], [91, -2, 25, 95, 13]
];

if (petalLayer) {
	for (const [left, delay, duration, drift, size] of petals) {
		const petal = document.createElement('span');
		petal.className = 'falling-petal';
		petal.style.setProperty('--left', `${left}%`);
		petal.style.setProperty('--delay', `${delay}s`);
		petal.style.setProperty('--duration', `${duration}s`);
		petal.style.setProperty('--drift', `${drift}px`);
		petal.style.setProperty('--size', `${size}px`);
		petalLayer.append(petal);
	}
}
