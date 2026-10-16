import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { PageTransition } from './components/PageTransition'
import { MainLayout } from './layouts/MainLayout'
import { AboutPage } from './pages/AboutPage'
import { CaseStudiesPage } from './pages/CaseStudiesPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { PrivacyPage } from './pages/PrivacyPage'
import { ServicesPage } from './pages/ServicesPage'
import { ShopPage } from './pages/ShopPage'
import { TermsPage } from './pages/TermsPage'
import { BulfranoGonzalezProposalPage } from './pages/proposals/BulfranoGonzalezProposalPage'
import { AutomationsServicePage } from './pages/services/AutomationsServicePage'
import { EcommerceServicePage } from './pages/services/EcommerceServicePage'
import { PhotoVideoServicePage } from './pages/services/PhotoVideoServicePage'
import { SeoPpcServicePage } from './pages/services/SeoPpcServicePage'
import { SocialMediaServicePage } from './pages/services/SocialMediaServicePage'
import { WebsiteServicePage } from './pages/services/WebsiteServicePage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route element={<PageTransition />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="case-studies" element={<CaseStudiesPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="legal/privacy" element={<PrivacyPage />} />
            <Route path="legal/terms" element={<TermsPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="services/website" element={<WebsiteServicePage />} />
            <Route path="services/seo-ppc" element={<SeoPpcServicePage />} />
            <Route path="services/photo-video" element={<PhotoVideoServicePage />} />
            <Route path="services/social-media" element={<SocialMediaServicePage />} />
            <Route path="services/ecommerce" element={<EcommerceServicePage />} />
            <Route path="services/automations" element={<AutomationsServicePage />} />
            <Route
              path="proposals/bulfrano-gonzalez-lawn-service"
              element={<BulfranoGonzalezProposalPage />}
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
