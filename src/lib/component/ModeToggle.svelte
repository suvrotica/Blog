<script>
	// Import the `browser` variable from SvelteKit's environment module
	// This variable is true if the code is running in the browser
	import { browser } from '$app/environment';

	// Initialize a variable to keep track of the current theme mode
	let isDarkMode = false;

	// Check if the code is running in the browser
	if (browser) {
		// Check if the dark class is present on the document's root element
		// This determines if dark mode is currently enabled
		isDarkMode = document.documentElement.classList.contains('dark');

		// Get a reference to the toggle button by its ID
		const button = document.getElementById('toggle');

		// Add a click event listener to the toggle button
		button?.addEventListener('click', () => {
			// Toggle the 'dark' class on the document's root element
			document.documentElement.classList.toggle('dark');
			// Update the `isDarkMode` variable to reflect the change
			isDarkMode = !isDarkMode;
		});
	}
</script>

<!-- Toggle Button Markup -->
<button id="toggle" class="p-2">
	<!-- Conditional Rendering Based on `isDarkMode` -->
	{#if isDarkMode}
		<!-- Moon Icon for Dark Mode -->
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-6 h-6"
		>
			<!-- SVG path for the moon icon -->
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
			/>
		</svg>
	{:else}
		<!-- Sun Icon for Light Mode -->
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-6 h-6"
		>
			<!-- SVG path for the sun icon -->
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
			/>
		</svg>
	{/if}
</button>
