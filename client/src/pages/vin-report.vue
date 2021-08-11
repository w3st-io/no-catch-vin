<template>
	<BContainer class="my-5">
		<BButton
			variant="primary"
			class="w-100"
			@click="exportToPDF()"
		>Export to PDF</BButton>
		
		<!-- [HIDDEN] -->
		<div class="d">
			<div ref="document">
				<div class="w-100">
					<h3>Vin Report for: {{ 'vin-here' }}</h3>
					<table class="table table-striped table-bordered">
						<tbody>
							<tr>
								<td>Is Salvaged:</td>
								<td>True</td>
							</tr>
							<tr>
								<td>Is Salvaged:</td>
								<td>True</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</BContainer>
</template>

<script>
	import html2pdf from 'html2pdf.js'

	export default {
		methods: {
			exportToPDF() {
				html2pdf(
					this.$refs.document,
					{
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
					}
				)
			}
		}
	}
</script>