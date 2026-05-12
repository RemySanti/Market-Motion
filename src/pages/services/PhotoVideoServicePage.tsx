import { ServiceFrame } from '../../components/ServiceFrame'
import { usePageTitle } from '../../hooks/usePageTitle'
import { photoVideoNarrative } from '../../site/serviceNarratives'

export function PhotoVideoServicePage() {
  usePageTitle('Photo & video')

  return (
    <ServiceFrame
      narrative={photoVideoNarrative}
      kicker="Service / Photo & video"
      title="Modular creative pipelines for always-on channels."
      lede="From product macro to founder narrative—we storyboard, shoot, grade, and deliver channel-native cuts."
      bullets={[
        'Shot lists aligned to funnel stages and platform safe zones.',
        'Color pipeline with reusable LUTs + brand-locked vectors.',
        'Deliverables spec: masters, social ratios, CTV, and DOOH when needed.',
      ]}
      metrics={[
        { label: 'Turnaround', value: '10–14d' },
        { label: 'Formats / kit', value: '12+' },
      ]}
    />
  )
}
