+++
date = '2025-12-07T20:19:41+01:00'
draft = false
construction = true
title = 'Chemicals Template'
subtitle = ''
author = ['Spike Murphy Müller ¹']
affiliation = ['¹ Center for Experimental Medicine, Institute of Biochemistry and Signal Transduction, Working Group Signal Transduction in Cancer']
version = 'Version 1.0.0'
version_explanation = 'first: major revisions - second: minor revisions - third: revisions without changing procedure'
updated = ''
finished = false
tested = false

common_name = ['']
short_name = ['']
IUPAC = ['']
other_names = ['']
formula = ['H<sub>2</sub>O']
molecular_weight = ['']
cas_number = ['']

signal_word = ['warning','danger']
physical_hazard_classes = ['']
health_hazard_classes = ['']
environmental_hazard_classes = ['']
gloves = ['nitrile gloves, EN ISO 374-1 type A/B/C, EN ISO 374-5 bacteria & fungi + VIRUSES']
mask = ['not required']
fume_hood = ['not required']

appearance = ['white crystalline solid']
melting_point = ['not determined']
boiling_point = ['not determined']
solubility = ['x g/L in water', 'mostly insoluble in most organic solvents']
pKa = ['pKa₁ x.xx', 'pKa₂ x.xx', 'pKa₃ x.xx']
ph_range_effective = ['x.x-x.x']
acid_base_properties = ['weak/strong acid/base with an effective buffering range pH x.x-x.x']
net_charge = ['neutral at pH 7', 'negatively charged above pH x.x', 'positively charged below pH x.x']
isoelectric_point = ['pI x.x']

storage_conditions = ['room temperature']
stability = ['stable in air']
shelf_life = ['indefinite under proper storage conditions']
common_use_cases = ['']
incompatibilities = ['']
typical_stock_concentrations = ['']
+++
<!-- CONTENT_NEW: delete when finished = true + tested = true -->

{{< infobox type="info" title="METADATA" >}}
{{< biochemsheets/chemicals/chemicals_metadata >}}
{{< /infobox >}}

{{< infobox type="danger" title="SAFETY" >}}
{{< biochemsheets/chemicals/chemicals_safety >}}
{{< /infobox >}}

{{< infobox type="warning" title="HANDLING" >}}
{{< biochemsheets/chemicals/chemicals_handling >}}
{{< /infobox >}}

<!-- markdownlint-disable MD025 MD024 -->

# <!---------- frontmatter examples ---------->

physical_hazard_classes = [
  "explosive",
  "flammable gas",
  "flammable liquid",
  "flammable solid",
  "oxidizing agent",
  "self-reactive substance",
  "pyrophoric substance",
  "self-heating substance",
  "water-reactive substance",
  "organic peroxide",
  "gas under pressure",
  "corrosive to metals",
  "desensitized explosive"
]
health_hazard_classes = [
  "acute toxicity",
  "skin corrosion",
  "skin irritation",
  "serious eye damage",
  "eye irritation",
  "respiratory sensitization",
  "skin sensitization",
  "germ cell mutagenicity",
  "carcinogenicity",
  "reproductive toxicity",
  "specific target organ toxicity – single exposure",
  "specific target organ toxicity – repeated exposure",
  "aspiration hazard"
]
environmental_hazard_classes = [
  "hazardous to the aquatic environment – acute",
  "hazardous to the aquatic environment – chronic",
  "ozone layer hazard"
]
signal_word = [
  'warning',
  'danger'
]
gloves = [
  'not required',
  'nitrile gloves, EN ISO 374-1 type A/B/C, EN ISO 374-5 bacteria & fungi + VIRUSES'
  'double nitrile gloves recommended',
  'butyl rubber gloves',
  'neoprene gloves',
]
mask = [
  'not required',
  'surgical mask',
  'FFP1 respirator',
  'FFP2 respirator',
  'FFP3 respirator',
  'respirator with organic vapor filter (A)',
  'respirator with organic vapor + particulate filter (A/P2)',
  'respirator with organic vapor + particulate filter (A/P3)'
]
fume_hood = fume_hood = [
  'not required',
  'recommended',
  'required',
  'required for weighing',
  'required for solution preparation',
  'required for heating',
]

appearance = [
  'white crystalline solid',
  'off-white crystalline solid',
  'colorless solid',
  'pale yellow solid',
  'white powder',
  'fine white powder',
  'hygroscopic powder',
  'colorless liquid',
  'clear liquid',
  'viscous liquid',
  'oily liquid',
  'amorphous solid',
  'lyophilized powder'
]
melting_point = [
  'not determined',
  'decomposes before melting',
  '< 0 °C',
  '0–5 °C',
  '20–25 °C',
  '25–30 °C',
  '50–55 °C',
  '80–85 °C',
  '> 100 °C'
]
boiling_point = [
  'not determined',
  'decomposes before boiling',
  '< 100 °C',
  '100–120 °C',
  '150–160 °C',
  '200–220 °C',
  '> 250 °C'
]
solubility = [
  'water',
  'water (cold)',
  'water (hot)',
  'aqueous buffers',
  'ethanol',
  'methanol',
  'isopropanol',
  'acetone',
  'DMSO',
  'DMF',
  'chloroform',
  'diethyl ether',
  'hexane',
  'insoluble in water',
  'sparingly soluble in water'
]
pKa = [
  'pKa₁ x.xx', 
  'pKa₂ x.xx', 
  'pKa₃ x.xx']
ph_range_effective = ['x.x-x.x']
acid_base_properties = ['weak/strong acid/base with an effective buffering range pH x.x-x.x']
net_charge = ['neutral at pH 7', 'negatively charged above pH x.x', 'positively charged below pH x.x']
isoelectric_point = ['pI x.x']

storage_conditions = [
  'room temperature',
  'room temperature, dry',
  'room temperature, protected from light',
  '4 °C',
  '4 °C, protected from light',
  '−20 °C',
  '−20 °C, desiccated',
  '−20 °C, under inert atmosphere',
  '−80 °C',
  'store tightly closed',
  'store under nitrogen or argon'
]
stability = [
  'stable in air',
  'unstable in air',
  'hygroscopic',
  'moisture sensitive',
  'light sensitive',
  'heat sensitive',
  'stable in water',
  'unstable in water',
  'stable in aqueous buffers',
  'stable in organic solvents',
  'hydrolyzes in aqueous solution',
  'oxidizes in air',
  'decomposes upon prolonged storage'
]
common_use_cases = ['']
incompatibilities = [
  'water',
  'moisture',
  'strong acids',
  'strong bases',
  'oxidizing agents',
  'reducing agents',
  'metal ions',
  'primary amines',
  'thiols',
  'light',
  'heat',
  'peroxides',
  'halogenated solvents'
]
typical_stock_concentrations = [
  '1 M',
  'prepared fresh before use'
]

<!---------- /frontmatter examples ---------->
#

<!-- markdownlint-enable MD025 MD024 -->