import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";

export default function FoodPartnerGuidancePage() {
  return (
    <div className="flex flex-col min-h-dvh bg-gradient-to-b from-background to-muted/20">
      <Header />
      <main className="flex-1 py-12 md:py-16">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="bg-background rounded-2xl shadow-lg overflow-hidden border border-border/50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-8 md:p-12 text-center border-b border-border/30">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                CREVINGS FOOD PARTNER LISTING GUIDANCE
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                <em>Effective Date: 11 November 2025</em>
              </p>
            </div>

            {/* Content */}
            <div className="p-6 md:p-10">
              <div className="prose prose-lg max-w-none prose-headings:font-semibold prose-headings:text-foreground prose-p:text-foreground/90 prose-li:text-foreground/90 prose-li:marker:text-primary">
                <p className="lead">
                  This document constitutes the official Crevings Food Partner Listing Guidance issued by CREVINGS MARKETPLACE PRIVATE LIMITED (hereinafter referred to as the "Company," "we," "us," or "our"). It defines the mandatory visual, pricing, and representational standards that all Food Partners ("Partner," "you," or "your") must adhere to when publishing or maintaining menu listings, imagery, or price information on the Crevings Partner Platform ("Platform").
                </p>
                <p>
                  These guidelines are issued in furtherance of maintaining authenticity, fair pricing, and consumer trust within the Crevings ecosystem.
                </p>

                <section className="mt-12">
                  <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2 mb-6">1. PURPOSE AND SCOPE</h2>
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Applicability:</strong> This Guidance applies to all Food Partners, restaurants, cloud kitchens, cafés, and other merchant entities listed on the Crevings Platform.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Binding Condition:</strong> Compliance with this Guidance is a binding condition of continued listing on the Crevings App and associated Partner interfaces.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Governed Provisions:</strong> The provisions herein govern visual and media content standards, pricing and verification procedures, authenticity and transparency obligations, and enforcement and delisting actions.</span>
                    </li>
                  </ul>
                </section>

                <section className="mt-12">
                  <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2 mb-6">2. IMAGE AND MEDIA GUIDELINES</h2>
                  <h3 className="text-xl font-semibold text-foreground mt-6">2.1. Prohibition on AI or Stock Imagery</h3>
                  <p className="mt-4">Partners are strictly prohibited from using:</p>
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>AI-generated food images</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Images sourced or downloaded from Google, stock image providers, or other third-party websites</span>
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold text-foreground mt-6">2.2. Use of Original Food Photography</h3>
                  <p className="mt-4">All images uploaded to the Crevings Platform must depict the actual food prepared by the Partner's establishment. Images should be current, clear, and representative of the real dish offered to customers.</p>

                  <h3 className="text-xl font-semibold text-foreground mt-6">2.3. Permitted Editing and Enhancements</h3>
                  <p className="mt-4">Partners may utilize AI tools or editing software solely for:</p>
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Background cleanup or replacement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Lighting, exposure, or color correction</span>
                    </li>
                  </ul>
                  <p className="mt-4">Such edits must not distort, exaggerate, or misrepresent the true appearance, quantity, or presentation of the food.</p>

                  <h3 className="text-xl font-semibold text-foreground mt-6">2.4. Authorized Photography Support</h3>
                  <p className="mt-4">Partners are encouraged to:</p>
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Engage professional photo studios to capture their menu items; or</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Request the Crevings Studio Team to conduct on-site food photography</span>
                    </li>
                  </ul>
                  <p className="mt-4">All such sessions shall comply with Crevings' branding and authenticity standards.</p>

                  <h3 className="text-xl font-semibold text-foreground mt-6">2.5. Prohibition of Misleading Visual Representation</h3>
                  <p className="mt-4">Depicting garnishes, ingredients, or packaging not included in the actual order offering constitutes visual misrepresentation and may lead to immediate corrective action or delisting.</p>
                </section>

                <section className="mt-12">
                  <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2 mb-6">3. MENU AND PRICING STANDARDS</h2>
                  <h3 className="text-xl font-semibold text-foreground mt-6">3.1. Price Parity Obligation</h3>
                  <p className="mt-4">Crevings follows a 0% commission model; therefore, all menu prices listed on the Platform must be identical to the Partner's offline prices.</p>

                  <h3 className="text-xl font-semibold text-foreground mt-6">3.2. Mandatory Menu Upload for Verification</h3>
                  <p className="mt-4">During onboarding, Partners must upload a clear image or PDF of their physical menu card(s) for internal verification and price validation.</p>

                  <h3 className="text-xl font-semibold text-foreground mt-6">3.3. Price Change Protocol</h3>
                  <p className="mt-4">Partners seeking to modify item prices must contact the Crevings Partner Support Team. Price updates will be permitted only if:</p>
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>The Partner has formally updated its offline (physical) menu cards, and</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>The revised pricing is supported by valid documentation or updated menu imagery</span>
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold text-foreground mt-6">3.4. Menu Authenticity and Currency</h3>
                  <p className="mt-4">All menu items must reflect actual availability. Listing items not currently available for sale is strictly prohibited. Repeated false listings may result in suspension.</p>
                </section>

                <section className="mt-12">
                  <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2 mb-6">4. CONTENT OWNERSHIP AND REPRESENTATION</h2>
                  <h3 className="text-xl font-semibold text-foreground mt-6">4.1. Ownership Declaration</h3>
                  <p className="mt-4">By uploading any content (images, videos, descriptions, or menus), the Partner declares that they own or have legal rights to use such content and that it does not infringe any third-party copyrights or licenses.</p>

                  <h3 className="text-xl font-semibold text-foreground mt-6">4.2. License to Crevings</h3>
                  <p className="mt-4">Partners grant Crevings a limited, non-exclusive, royalty-free license to use, reproduce, and display uploaded content on its digital platforms and marketing materials solely for the purpose of promoting the Partner's offerings.</p>

                  <h3 className="text-xl font-semibold text-foreground mt-6">4.3. Misuse or Unauthorized Content</h3>
                  <p className="mt-4">Uploading plagiarized, copyrighted, or third-party-owned visuals without authorization may result in:</p>
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Immediate content removal</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Temporary suspension or permanent delisting</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Potential liability under applicable copyright laws</span>
                    </li>
                  </ul>
                </section>

                <section className="mt-12">
                  <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2 mb-6">5. QUALITY AND HYGIENE REPRESENTATION</h2>
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Partners shall ensure that images accurately represent the portion size, packaging, and plating standards offered to customers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Food descriptions (veg/non-veg classification, spice level, ingredients, allergens, etc.) must be truthful and comply with FSSAI regulations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Misleading, exaggerated, or deceptive claims (e.g., "100% organic," "zero calories") without substantiation are strictly prohibited</span>
                    </li>
                  </ul>
                </section>

                <section className="mt-12">
                  <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2 mb-6">6. ENFORCEMENT, WARNINGS, AND DELISTING</h2>
                  <h3 className="text-xl font-semibold text-foreground mt-6">6.1. Corrective Action Procedure</h3>
                  <p className="mt-4">If any Partner violates these guidelines, the Company will:</p>
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Issue a formal warning and allow a reasonable window to correct the issue</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Provide limited support to rectify the listing, if feasible</span>
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold text-foreground mt-6">6.2. Persistent Violations</h3>
                  <p className="mt-4">Continued non-compliance or repeated infractions may result in:</p>
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Temporary suspension of listings, or</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Permanent delisting from the Crevings Platform without further notice</span>
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold text-foreground mt-6">6.3. Fraudulent Representation Clause</h3>
                  <p className="mt-4">Any intentional attempt to mislead customers or falsify menu listings shall be deemed a material breach of Partner Agreement, inviting immediate termination and possible legal recourse.</p>
                </section>

                <section className="mt-12">
                  <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2 mb-6">7. AMENDMENTS AND COMMUNICATION</h2>
                  <h3 className="text-xl font-semibold text-foreground mt-6">7.1. Right to Amend</h3>
                  <p className="mt-4">The Company reserves the right to revise or expand this Listing Guidance periodically to reflect operational, legal, or marketplace developments.</p>

                  <h3 className="text-xl font-semibold text-foreground mt-6">7.2. Notification of Updates</h3>
                  <p className="mt-4">Whenever this Guidance is updated, all registered Food Partners shall be informed via:</p>
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Push notifications in the Partner App</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Official WhatsApp communication</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Email notice to the registered Partner email address</span>
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold text-foreground mt-6">7.3. Acceptance of Updates</h3>
                  <p className="mt-4">Continued use of the Platform constitutes acceptance of the updated Guidance.</p>
                </section>

                <section className="mt-12">
                  <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2 mb-6">8. CONTACT AND SUPPORT</h2>
                  <p className="mt-4">For assistance or to report a compliance concern, contact:</p>
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>📧 support@crevings.com</span>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}