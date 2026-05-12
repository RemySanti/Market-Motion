import { ServiceFrame } from '../../components/ServiceFrame'
import { usePageTitle } from '../../hooks/usePageTitle'
import { ecommerceNarrative } from '../../site/serviceNarratives'

export function EcommerceServicePage() {
  usePageTitle('Ecommerce')

  return (
    <ServiceFrame
      narrative={ecommerceNarrative}
      kicker="Service / Ecommerce"
      title="Checkout flows that survive traffic spikes and promos."
      lede="Headless storefronts, subscription logic, and ops automation—from catalog to fulfillment signals."
      bullets={[
        'Shopify, Custom, or hybrid—pick the tradeoffs, we implement deliberately.',
        'Merch rules, pricing experiments, and inventory-aware campaigns.',
        'Payments, tax, and fraud hooks reviewed with your finance lead.',
      ]}
      metrics={[
        { label: 'Uptime posture', value: 'Multi-region' },
        { label: 'Core vitals', value: 'Monitored' },
      ]}
    />
  )
}
