import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";
import { IndianRupee } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-gradient-to-b from-background to-muted/20">
      <Header />
      <main className="flex-1 py-12 md:py-16">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="bg-background rounded-2xl shadow-lg overflow-hidden border border-border/50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-8 md:p-12 text-center border-b border-border/30">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                CREVINGS - FOOD PARTNER TERMS & CONDITIONS
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                <em>Effective Date: 21st July 2025</em>
              </p>
            </div>

            {/* Content */}
            <div className="p-6 md:p-10">
              <div className="prose prose-lg max-w-none prose-headings:font-semibold prose-headings:text-foreground prose-p:text-foreground/90 prose-li:text-foreground/90 prose-li:marker:text-primary">
                <p className="lead">
                  This document outlines the preliminary Terms & Conditions applicable to restaurant partners ("Restaurant" or "You") onboarded onto the Crevings food delivery platform ("Crevings", "We", "Us", or "Our").
                </p>
                <p>
                  By registering as a partner on Crevings, you agree to comply with all the terms outlined below. These terms are binding and subject to expansion in subsequent phases.
                </p>

                <section className="mt-12">
                  <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2 mb-6">1. GENERAL ACCEPTANCE</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>By signing up as a restaurant partner, you accept to be legally bound by the terms mentioned herein.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>You confirm that all information shared during onboarding is true and accurate.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Crevings reserves the right to amend, update, or modify these terms at any time with prior notice through email, dashboard, or official communication channels.</span>
                    </li>
                  </ul>
                </section>

                <section className="mt-12">
                  <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2 mb-6">2. RESTAURANT ELIGIBILITY</h2>
                  <p>To qualify for onboarding, the restaurant must:</p>
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Be a legally registered entity (proprietorship, partnership, LLP, private limited, etc.).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Hold a valid FSSAI license.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Hold a valid GST Number.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Be in compliance with all local municipal health and safety regulations.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Have a functional kitchen and staff capable of handling online order volumes.</span>
                    </li>
                  </ul>
                  <p className="mt-4">Crevings may request documentary proof during onboarding or at any time thereafter.</p>
                </section>

                <section className="mt-12">
                  <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2 mb-6">3. USE OF PLATFORM</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>The restaurant is responsible for maintaining an up-to-date menu, item availability, pricing, and restaurant profile via the Crevings dashboard or app.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Prices listed on the platform must match dine-in prices unless explicitly mentioned or approved under a special campaign.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Restaurants must not misuse or exploit the platform, attempt fraud, or manipulate system processes such as orders, ratings, or payouts.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>All activities on the restaurant's account are their sole responsibility.</span>
                    </li>
                  </ul>
                </section>

                <section className="mt-12">
                  <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2 mb-6">4. ORDER FULFILMENT</h2>
                  <p>Orders accepted through the Crevings platform must be fulfilled within the promised preparation time.</p>
                  <p>Restaurants must:</p>
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Ensure food is freshly prepared and hygienically packed.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Use tamper-proof packaging where possible.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Be available during the operational hours listed on the platform.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Order delays, missing items, or customer complaints can result in penalties or reduced visibility.</span>
                    </li>
                  </ul>
                  <p className="mt-4">Crevings may monitor order success rate, customer feedback, and cancellation ratio as quality indicators.</p>
                </section>

                <section className="mt-12">
                  <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2 mb-6">5. SERVICE FEES & SUBSCRIPTION</h2>
                  <p>The restaurant agrees to pay the following fees for platform usage:</p>
                  <h3 className="text-xl font-semibold text-foreground mt-6">a. Subscription Charges:</h3>
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><IndianRupee className="h-4 w-4 inline mr-1" />399/month (plus 18% GST = <IndianRupee className="h-4 w-4 inline mr-1" />470.82 total) billed monthly.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Gives access to all platform features including dashboard, analytics, and restaurant profile.</span>
                    </li>
                  </ul>
                  <h3 className="text-xl font-semibold text-foreground mt-6">b. Commission on Orders:</h3>
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>We charge 0% on the food value of every order received through Crevings. Actually we don't charge any commission from You.</span>
                    </li>
                  </ul>
                  <h3 className="text-xl font-semibold text-foreground mt-6">c. Government GST on Food Delivery:</h3>
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>5% GST on food value will be collected from the customer and passed to the restaurant or remitted by Crevings on their behalf (as per updated tax policy).</span>
                    </li>
                  </ul>
                  <h3 className="text-xl font-semibold text-foreground mt-6">d. Platform Fee (Charged to Customer):</h3>
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Crevings charges customers a <IndianRupee className="h-4 w-4 inline mr-1" /> 0 platform fee per order to cover app/tech/maintenance charges.</span>
                    </li>
                  </ul>
                </section>

                <section className="mt-12">
                  <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2 mb-6">6. PAYOUTS & SETTLEMENTS</h2>
                  <p>Restaurant payouts are processed Daily at night between 9:00pm to 10:00pm through NEFT.</p>
                  <p>The payable amount is calculated after deductions:</p>
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Subscription fees (if unpaid).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Penalties (if applicable).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Refunds or reimbursements due to customer complaints.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Marketing budget deduction ( if restaurants pay through app wallet ).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Govt taxes on behalf of restaurant ( 5% of total food delivery ).</span>
                    </li>
                  </ul>
                  <p className="mt-4">The restaurant will receive a detailed invoice and payout summary via dashboard and email.</p>
                  <p className="mt-4">All payments are routed via authorized Nodal Bank Accounts as per RBI compliance.</p>
                </section>

                <section className="mt-12">
                  <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2 mb-6">7. PROMOTION & BRANDING POLICY</h2>
                  <h3 className="text-xl font-semibold text-foreground mt-6">Brand Ownership</h3>
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>The Crevings name, logo, platform design, and all official branding elements are the exclusive intellectual property of Crevings Pvt. Ltd.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Restaurants are prohibited from reproducing, altering, sublicensing, or using these branding elements without prior written consent from Crevings.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Unauthorized use of brand assets may result in account suspension and legal action under applicable laws.</span>
                    </li>
                  </ul>
                  <h3 className="text-xl font-semibold text-foreground mt-6">Restaurant Branding on Platform</h3>
                  <p>By onboarding with Crevings, restaurants grant Crevings a non-exclusive, royalty-free, worldwide license to use their brand name, menu, photos, and promotional materials for:</p>
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>In-app listings and marketing banners</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Email marketing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Social media campaigns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Digital or offline advertisements</span>
                    </li>
                  </ul>
                  <p className="mt-4">Crevings may resize, compress, or format submitted images to meet platform quality standards.</p>
                  <p className="mt-4">Restaurants are responsible for ensuring that all submitted media and branding assets do not violate any copyright or intellectual property rights of third parties.</p>
                  <h3 className="text-xl font-semibold text-foreground mt-6">Platform Promotions (Crevings-Initiated)</h3>
                  <p>Crevings may run platform-wide promotional campaigns, including but not limited to:</p>
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Free Delivery</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Festival Offers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Cashback Deals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>New User Discounts</span>
                    </li>
                  </ul>
                  <p className="mt-4">Restaurants will be notified in advance if any such promotion affects:</p>
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Their menu pricing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Net payout after deductions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Display priority or listing rank</span>
                    </li>
                  </ul>
                  <p className="mt-4">Participation in paid promotions (e.g., featured listings, homepage banners, spotlight campaigns) is optional and based on mutual agreement.</p>
                  <p className="mt-4">Restaurants shall not be liable for promotion costs unless explicitly agreed upon in writing.</p>
                  <h3 className="text-xl font-semibold text-foreground mt-6">Restaurant-Led Promotions</h3>
                  <p>Restaurants may independently configure discount offers, meal combos, or loyalty programs via the Crevings dashboard.</p>
                  <p className="mt-4">These promotions:</p>
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Will be displayed to users during checkout</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Will not incur any extra commission or marketing charges by Crevings</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>All restaurant-initiated offers must comply with applicable FSSAI and GST laws.</span>
                    </li>
                  </ul>
                  <h3 className="text-xl font-semibold text-foreground mt-6">Misuse & Manipulation of Promotions</h3>
                  <p>Prohibited actions include:</p>
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Creating fake/dummy orders to exploit discounts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Self-referrals or manipulated referrals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Inflating prices before applying discounts</span>
                    </li>
                  </ul>
                  <p className="mt-4">Any detected misuse may result in:</p>
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Temporary suspension of the promotional privileges</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Permanent termination from the platform</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Legal action or withholding of payouts if financial fraud is established</span>
                    </li>
                  </ul>
                </section>

                <section className="mt-12">
                  <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2 mb-6">8. REFUNDS & CANCELLATIONS</h2>
                  <p>Crevings is committed to ensuring fairness in all refund scenarios that involve restaurant partners. The following outlines refund eligibility and actions related to restaurant errors, cancellations, or quality issues:</p>
                  <h3 className="text-xl font-semibold text-foreground mt-6">Customer Cancellations:</h3>
                  <h4 className="text-lg font-semibold text-foreground mt-4">Prepaid Orders:</h4>
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Before Restaurant Acceptance: 100% refund.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>After Acceptance but Before Preparation: 70% refund (if restaurant confirms no food was prepared).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Once food is “started or Ready”: No refund.</span>
                    </li>
                  </ul>
                  <h4 className="text-lg font-semibold text-foreground mt-6">Cash on Delivery (COD) Orders:</h4>
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Before Preparation Begins: Cancellations will be accepted.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>After Preparation Begins: Restaurant may reject the cancellation request.</span>
                    </li>
                  </ul>
                  <p className="mt-4">If Customer Refuses Delivery: The restaurant will be notified, but no refund or penalty will apply unless food was specially prepared.</p>
                  <h3 className="text-xl font-semibold text-foreground mt-6">Restaurant-Initiated or Restaurant Fault-Based Cancellations</h3>
                  <p>If a cancellation is initiated by the restaurant (e.g. due to item unavailability, delays, or kitchen issues), the following applies:</p>
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>A full refund will be processed.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Crevings may take disciplinary action against the restaurant for repeated faults or service issues.</span>
                    </li>
                  </ul>
                  <h3 className="text-xl font-semibold text-foreground mt-6">Shared Refund Responsibility</h3>
                  <p>If a refund situation is partially due to restaurant fault (e.g. order not prepared on time), and partially due to other factors (e.g. customer delay), the liability is shared as:</p>
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Crevings: 30%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Restaurant: 70%</span>
                    </li>
                  </ul>
                  <h3 className="text-xl font-semibold text-foreground mt-6">Fairness & Accountability</h3>
                  <p>Restaurants are expected to maintain transparency in food availability and real-time item status.</p>
                  <p className="mt-4">Repeated refund-triggering behavior such as:</p>
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Non-acceptance of orders</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Cancelling accepted orders</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Unavailable items post-confirmation</span>
                    </li>
                  </ul>
                  <p className="mt-4">...may result in reduced visibility or service-level restrictions.</p>
                </section>

                <section className="mt-12">
                  <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2 mb-6">9. CONFIDENTIALITY</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Both parties agree to maintain confidentiality of any business, customer, or operational information shared.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>The restaurant shall not disclose any Crevings proprietary data, customer information, or operational process to any third party.</span>
                    </li>
                  </ul>
                </section>

                <section className="mt-12">
                  <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2 mb-6">10. TERMINATION</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Either party may terminate the agreement with a 7-day notice by an e-mail.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>In cases of breach of terms, fraud, or repeated customer complaints, Crevings may suspend or terminate the account immediately.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Any Outstanding dues will be settled as per the last order cycle.</span>
                    </li>
                  </ul>
                </section>

                <section className="mt-12">
                  <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2 mb-6">11. LIMITATION OF LIABILITY</h2>
                  <p>Crevings shall not be held liable for:</p>
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Loss of business or profits.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Operational losses caused due to delays or technical issues from Food Partner Side.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Indirect, incidental, or consequential damages.</span>
                    </li>
                  </ul>
                  <p className="mt-4">Our total liability is limited to the subscription fees paid by the restaurant in the last 30 days.</p>
                </section>

                <section className="mt-12">
                  <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2 mb-6">12. GOVERNING LAW & JURISDICTION</h2>
                  <p>This Agreement shall be governed by and construed in accordance with the laws of India. Any disputes arising from or in connection with this Agreement shall be subject to the exclusive jurisdiction of the courts of Prayagraj, Uttar Pradesh, India.</p>
                </section>

                <section className="mt-12">
                  <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2 mb-6">13. FORCE MAJEURE</h2>
                  <p>Crevings and the Restaurant shall not be held liable for any delay or failure in performance of any part of this Agreement caused by events beyond their reasonable control. These may include, but are not limited to:</p>
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Natural disasters (earthquakes, floods, rain , etc.)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>War or terrorism</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Government regulations or lockdowns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Labor strikes or civil disturbances</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Internet or utility outages</span>
                    </li>
                  </ul>
                  <p className="mt-4">In such cases, the affected party shall notify the other party at the earliest and resume operations as soon as reasonably possible.</p>
                </section>

                <section className="mt-12">
                  <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2 mb-6">14. TECHNICAL DOWNTIME</h2>
                  <p>Crevings shall not be held liable for any temporary interruptions, technical errors, or maintenance downtime that may affect the ability of the restaurant to receive or process orders. In the event of a major platform issue, Crevings will make reasonable efforts to notify partners in advance or as early as possible.</p>
                </section>

                <section className="mt-12">
                  <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2 mb-6">15. MODIFICATION OF TERMS</h2>
                  <p>Crevings reserves the right to modify or update these Terms and Conditions at any time. Restaurants will be notified via email or app notifications. Continued use of the platform following such modifications shall constitute acceptance of the revised terms.</p>
                </section>

                <div className="mt-12 pt-8 border-t border-border/50">
                  <p className="text-center text-muted-foreground">
                    Last Updated: July 21, 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
