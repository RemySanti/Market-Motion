import { ServiceFrame } from '../../components/ServiceFrame'
import { usePageTitle } from '../../hooks/usePageTitle'
import { ecommerceNarrative } from '../../site/serviceNarratives'

export function EcommerceServicePage() {
  usePageTitle('Ecommerce')

  return (
    <ServiceFrame
      narrative={ecommerceNarrative}
      kicker="Service / Ecommerce"
      title="Checkout that survives traffic spikes and messy promos."
      lede="Headless storefronts, subscriptions, and ops-friendly automation—from catalog to what fulfillment actually sees."
      bullets={[
        'Shopify, custom, or hybrid—we pick the tradeoffs with you, then implement deliberately.',
        'Merch rules, pricing tests, and campaigns that respect inventory.',
        'Payments, tax, and fraud reviewed alongside your finance lead.',
      ]}
      metrics={[
        { label: 'Uptime posture', value: 'Multi-region' },
        { label: 'Core vitals', value: 'Monitored' },
      ]}
    />
  )
}
