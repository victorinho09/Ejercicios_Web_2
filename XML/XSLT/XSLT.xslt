<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

	<xsl:output method="html" encoding="UTF-8" indent="yes"/>
	<xsl:strip-space elements="*"/>

	<xsl:key name="country-by-name" match="record"
		use="normalize-space(field[@name='Country or Area'])"/>

	<xsl:template match="/">
		<html lang="es">
			<head>
				<meta charset="UTF-8"/>
				<title>Poblacion por pais</title>
				<style>
					body {
						font-family: Georgia, "Times New Roman", serif;
						margin: 2rem auto;
						max-width: 900px;
						line-height: 1.4;
						color: #1c1c1c;
					}

					h1 {
						margin-bottom: 1rem;
					}

					.controls {
						margin-bottom: 1.5rem;
					}

					label {
						font-weight: bold;
						margin-right: 0.5rem;
					}

					select {
						min-width: 280px;
						padding: 0.35rem 0.5rem;
						font-size: 1rem;
					}

					table {
						border-collapse: collapse;
						min-width: 320px;
					}

					th,
					td {
						border: 1px solid #b8b8b8;
						padding: 0.45rem 0.75rem;
						text-align: left;
					}

					th {
						background: #ececec;
					}

					.empty {
						display: none;
						margin-top: 1rem;
						font-style: italic;
					}
				</style>
			</head>
			<body>
				<xsl:variable name="firstCountry"
					select="normalize-space(/Root/data/record[1]/field[@name='Country or Area'])"/>

				<h1>Poblacion por pais</h1>

				<div class="controls">
					<label for="countrySelect">Elige un pais:</label>
					<select id="countrySelect">
						<xsl:for-each select="/Root/data/record[count(. | key('country-by-name', normalize-space(field[@name='Country or Area']))[1]) = 1]">
							<xsl:sort select="normalize-space(field[@name='Country or Area'])"/>
							<option>
								<xsl:attribute name="value">
									<xsl:value-of select="normalize-space(field[@name='Country or Area'])"/>
								</xsl:attribute>
								<xsl:if test="normalize-space(field[@name='Country or Area']) = $firstCountry">
									<xsl:attribute name="selected">selected</xsl:attribute>
								</xsl:if>
								<xsl:value-of select="normalize-space(field[@name='Country or Area'])"/>
							</option>
						</xsl:for-each>
					</select>
				</div>

				<h2 id="countryTitle">
					<xsl:value-of select="$firstCountry"/>
				</h2>

				<table>
					<thead>
						<tr>
							<th>Año</th>
							<th>Poblacion</th>
						</tr>
					</thead>
					<tbody id="populationBody">
						<xsl:for-each select="/Root/data/record">
							<xsl:sort select="normalize-space(field[@name='Country or Area'])"/>
							<xsl:sort select="number(field[@name='Year'])" data-type="number"/>
							<tr>
								<xsl:attribute name="data-country">
									<xsl:value-of select="normalize-space(field[@name='Country or Area'])"/>
								</xsl:attribute>
								<td>
									<xsl:value-of select="normalize-space(field[@name='Year'])"/>
								</td>
								<td>
									<xsl:value-of select="normalize-space(field[@name='Value'])"/>
								</td>
							</tr>
						</xsl:for-each>
					</tbody>
				</table>

				<p id="emptyMessage" class="empty">No hay datos para el pais seleccionado.</p>

				<script>
					function filterRows() {
						var select = document.getElementById('countrySelect');
						var selectedCountry = select.value;
						var rows = document.querySelectorAll('#populationBody tr');
						var title = document.getElementById('countryTitle');
						var emptyMessage = document.getElementById('emptyMessage');
						var visibleRows = 0;

						title.textContent = selectedCountry;

						for (var index = 0; index &lt; rows.length; index++) {
							var row = rows[index];
							var isVisible = row.getAttribute('data-country') === selectedCountry;
							row.style.display = isVisible ? '' : 'none';
							if (isVisible) {
								visibleRows++;
							}
						}

						emptyMessage.style.display = visibleRows === 0 ? 'block' : 'none';
					}

					document.addEventListener('DOMContentLoaded', function () {
						var select = document.getElementById('countrySelect');
						select.addEventListener('change', filterRows);
						filterRows();
					});
				</script>
			</body>
		</html>
	</xsl:template>

</xsl:stylesheet>
