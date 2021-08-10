<template>
	<div class="">
		<div ref="document" class="d-none">
		TERST
		</div>
		<button @click="exportToPDF">Export to PDF</button>
	</div>
</template>

<script>
	import html2pdf from 'html2pdf.js'

	export default {
		methods: {
			exportToPDF () {
				html2pdf(this.$refs.document, {
					margin: 1,
					filename: 'your-report.pdf',
					image: {
						type: 'jpeg',
						quality: 0.98
					},
					html2canvas: {
						dpi: 192,
						letterRendering: true
					},
					jsPDF: {
						unit: 'in',
						format: 'letter',
						orientation: 'landscape'
					}
				})
			}
		}
	}
</script>