<script>
	import capsizeStyles from '$lib/shared/actions/styles';
	import { createStyleObject } from '@capsizecss/core';
	/** @ts-ignore */
	import courierPrimeMetrics from '@capsizecss/metrics/courierPrime';

	/** @import {Snippet} from 'svelte' */

	/** @type {{capHeight: number; withCapsize: boolean; children: Snippet}} */
	let { capHeight, withCapsize, children } = $props();

	const styles = createStyleObject({
		capHeight,
		lineGap: 24,
		fontMetrics: courierPrimeMetrics,
	});

	const { capHeight: capHeightEm, unitsPerEm } = courierPrimeMetrics;
	const fontSizeToCapHeight = unitsPerEm / capHeightEm;
	const fontSize = `${capHeight * fontSizeToCapHeight}px`;
</script>

{#if withCapsize}
	<span use:capsizeStyles={styles} class="container">
		<div class="line with-capsize-line">
			{@render children?.()}
		</div>
	</span>
{:else}
	<span class="container">
		<div style:font-size={fontSize} class="line">
			{@render children?.()}
		</div>
	</span>
{/if}

<style>
	.line {
		background-color: var(--colour-light);
		color: var(--colour-dark);
		margin: var(--spacing-4) auto;
		font-weight: var(--font-weight-bold);
		font-size: var(--font-size);
		text-align: center;
		width: fit-content;
		line-height: calc(1 / 1.2);
	}

	.with-capsize-line {
		line-height: var(--line-height);
	}

	.with-capsize-line::before {
		content: var(--before-content);
		margin-bottom: var(--before-margin-bottom);
		display: var(--before-display);
	}

	.with-capsize-line::after {
		content: var(--after-content);
		margin-top: var(--after-margin-top);
		display: var(--after-display);
	}
</style>
