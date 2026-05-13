import { ServiceFrame } from '../../components/ServiceFrame'
import { usePageTitle } from '../../hooks/usePageTitle'
import { photoVideoNarrative } from '../../site/serviceNarratives'

export function PhotoVideoServicePage() {
  usePageTitle('Photo & video')

  return (
    <ServiceFrame
      narrative={photoVideoNarrative}
      kicker="Service / Photo & video"
      title="Photo and video built to ship everywhere you market."
      lede="From product detail to founder story—we plan, shoot, grade, and hand off cuts sized for each channel."
      bullets={[
        'Shot lists tied to funnel stages and each platform’s safe zones.',
        'Color pipeline with reusable LUTs and brand-locked vectors.',
        'Deliverable packs: masters, social ratios, CTV, and out-of-home when you need them.',
      ]}
      metrics={[
        { label: 'Turnaround', value: '10–14d' },
        { label: 'Formats / kit', value: '12+' },
      ]}
    />
  )
}
