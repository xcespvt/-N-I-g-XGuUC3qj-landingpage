
import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1 container py-12 md:py-20">
        <article className="prose prose-lg max-w-4xl mx-auto">
          <h1 className="text-center">CREVINGS - FOOD PARTNER TERMS & CONDITIONS</h1>
          <p className="text-center text-muted-foreground"><em>Effective Date: 21st July 2025</em></p>
          
          <p>This document outlines the preliminary Terms & Conditions applicable to restaurant partners (“Restaurant” or “You”) onboarded onto the Crevings food delivery platform (“Crevings”, “We”, “Us”, or “Our”).</p>
          <p>By registering as a partner on Crevings, you agree to comply with all the terms outlined below. These terms are binding and subject to expansion in subsequent phases.</p>

          <h2>1. GENERAL ACCEPTANCE</h2>
          <ul>
            <li>By signing up as a restaurant partner, you accept to be legally bound by the terms mentioned herein.</li>
            <li>You confirm that all information shared during onboarding is true and accurate.</li>
            <li>Crevings reserves the right to amend, update, or modify these terms at any time with prior notice through email, dashboard, or official communication channels.</li>
          </ul>

          <h2>2. RESTAURANT ELIGIBILITY</h2>
          <p>To qualify for onboarding, the restaurant must:</p>
          <ul>
            <li>Be a legally registered entity (proprietorship, partnership, LLP, private limited, etc.).</li>
            <li>Hold a valid FSSAI license.</li>
            <li>Hold a valid GST Number.</li>
            <li>Be in compliance with all local municipal health and safety regulations.</li>
            <li>Have a functional kitchen and staff capable of handling online order volumes.</li>
          </ul>
          <p>Crevings may request documentary proof during onboarding or at any time thereafter.</p>

          <h2>3. USE OF PLATFORM</h2>
          <ul>
            <li>The restaurant is responsible for maintaining an up-to-date menu, item availability, pricing, and restaurant profile via the Crevings dashboard or app.</li>
            <li>Prices listed on the platform must match dine-in prices unless explicitly mentioned or approved under a special campaign.</li>
            <li>Restaurants must not misuse or exploit the platform, attempt fraud, or manipulate system processes such as orders, ratings, or payouts.</li>
            <li>All activities on the restaurant's account are their sole responsibility.</li>
          </ul>

          <h2>4. ORDER FULFILMENT</h2>
          <p>Orders accepted through the Crevings platform must be fulfilled within the promised preparation time.</p>
          <p>Restaurants must:</p>
          <ul>
            <li>Ensure food is freshly prepared and hygienically packed.</li>
            <li>Use tamper-proof packaging where possible.</li>
            <li>Be available during the operational hours listed on the platform.</li>
            <li>Order delays, missing items, or customer complaints can result in penalties or reduced visibility.</li>
          </ul>
          <p>Crevings may monitor order success rate, customer feedback, and cancellation ratio as quality indicators.</p>

          <h2>5. SERVICE FEES & SUBSCRIPTION</h2>
          <p>The restaurant agrees to pay the following fees for platform usage:</p>
          <h3>a. Subscription Charges:</h3>
          <ul>
            <li>₹399/month (plus 18% GST = ₹470.82 total) billed monthly.</li>
            <li>Gives access to all platform features including dashboard, analytics, and restaurant profile.</li>
          </ul>
          <h3>b. Commission on Orders:</h3>
          <ul>
            <li>We charge 0% on the food value of every order received through Crevings. Actually we don't charge any commission from You.</li>
          </ul>
          <h3>c. Government GST on Food Delivery:</h3>
          <ul>
            <li>5% GST on food value will be collected from the customer and passed to the restaurant or remitted by Crevings on their behalf (as per updated tax policy).</li>
          </ul>
          <h3>d. Platform Fee (Charged to Customer):</h3>
          <ul>
            <li>Crevings charges customers a ₹0 platform fee per order to cover app/tech/maintenance charges.</li>
          </ul>

          <h2>6. PAYOUTS & SETTLEMENTS</h2>
          <p>Restaurant payouts are processed Daily at night between 9:00pm to 10:00pm through NEFT.</p>
          <p>The payable amount is calculated after deductions:</p>
          <ul>
            <li>Subscription fees (if unpaid).</li>
            <li>Penalties (if applicable).</li>
            <li>Refunds or reimbursements due to customer complaints.</li>
            <li>Marketing budget deduction ( if restaurants pay through app wallet ).</li>
            <li>Govt taxes on behalf of restaurant ( 5% of total food delivery ).</li>
          </ul>
          <p>The restaurant will receive a detailed invoice and payout summary via dashboard and email.</p>
          <p>All payments are routed via authorized Nodal Bank Accounts as per RBI compliance.</p>

          <h2>7. PROMOTION & BRANDING POLICY</h2>
          <h3>Brand Ownership</h3>
          <ul>
            <li>The Crevings name, logo, platform design, and all official branding elements are the exclusive intellectual property of Crevings Pvt. Ltd.</li>
            <li>Restaurants are prohibited from reproducing, altering, sublicensing, or using these branding elements without prior written consent from Crevings.</li>
            <li>Unauthorized use of brand assets may result in account suspension and legal action under applicable laws.</li>
          </ul>
          <h3>Restaurant Branding on Platform</h3>
          <p>By onboarding with Crevings, restaurants grant Crevings a non-exclusive, royalty-free, worldwide license to use their brand name, menu, photos, and promotional materials for:</p>
          <ul>
            <li>In-app listings and marketing banners</li>
            <li>Email marketing</li>
            <li>Social media campaigns</li>
            <li>Digital or offline advertisements</li>
          </ul>
          <p>Crevings may resize, compress, or format submitted images to meet platform quality standards.</p>
          <p>Restaurants are responsible for ensuring that all submitted media and branding assets do not violate any copyright or intellectual property rights of third parties.</p>
          <h3>Platform Promotions (Crevings-Initiated)</h3>
          <p>Crevings may run platform-wide promotional campaigns, including but not limited to:</p>
          <ul>
            <li>Free Delivery</li>
            <li>Festival Offers</li>
            <li>Cashback Deals</li>
            <li>New User Discounts</li>
          </ul>
          <p>Restaurants will be notified in advance if any such promotion affects:</p>
          <ul>
            <li>Their menu pricing</li>
            <li>Net payout after deductions</li>
            <li>Display priority or listing rank</li>
          </ul>
          <p>Participation in paid promotions (e.g., featured listings, homepage banners, spotlight campaigns) is optional and based on mutual agreement.</p>
          <p>Restaurants shall not be liable for promotion costs unless explicitly agreed upon in writing.</p>
          <h3>Restaurant-Led Promotions</h3>
          <p>Restaurants may independently configure discount offers, meal combos, or loyalty programs via the Crevings dashboard.</p>
          <p>These promotions:</p>
          <ul>
            <li>Will be displayed to users during checkout</li>
            <li>Will not incur any extra commission or marketing charges by Crevings</li>
            <li>All restaurant-initiated offers must comply with applicable FSSAI and GST laws.</li>
          </ul>
          <h3>Misuse &amp; Manipulation of Promotions</h3>
          <p>Prohibited actions include:</p>
          <ul>
            <li>Creating fake/dummy orders to exploit discounts</li>
            <li>Self-referrals or manipulated referrals</li>
            <li>Inflating prices before applying discounts</li>
          </ul>
          <p>Any detected misuse may result in:</p>
          <ul>
            <li>Temporary suspension of the promotional privileges</li>
            <li>Permanent termination from the platform</li>
            <li>Legal action or withholding of payouts if financial fraud is established</li>
          </ul>

          <h2>8. REFUNDS & CANCELLATIONS</h2>
          <p>Crevings is committed to ensuring fairness in all refund scenarios that involve restaurant partners. The following outlines refund eligibility and actions related to restaurant errors, cancellations, or quality issues:</p>
          <h3>Customer Cancellations:</h3>
          <h4>Prepaid Orders:</h4>
          <ul>
            <li>Before Restaurant Acceptance: 100% refund.</li>
            <li>After Acceptance but Before Preparation: 70% refund (if restaurant confirms no food was prepared).</li>
            <li>Once food is “started or Ready”: No refund.</li>
          </ul>
          <h4>Cash on Delivery (COD) Orders:</h4>
          <ul>
            <li>Before Preparation Begins: Cancellations will be accepted.</li>
            <li>After Preparation Begins: Restaurant may reject the cancellation request.</li>
          </ul>
          <p>If Customer Refuses Delivery: The restaurant will be notified, but no refund or penalty will apply unless food was specially prepared.</p>
          <h3>Restaurant-Initiated or Restaurant Fault-Based Cancellations</h3>
          <p>If a cancellation is initiated by the restaurant (e.g. due to item unavailability, delays, or kitchen issues), the following applies:</p>
          <ul>
            <li>A full refund will be processed.</li>
            <li>Crevings may take disciplinary action against the restaurant for repeated faults or service issues.</li>
          </ul>
          <h3>Shared Refund Responsibility</h3>
          <p>If a refund situation is partially due to restaurant fault (e.g. order not prepared on time), and partially due to other factors (e.g. customer delay), the liability is shared as:</p>
          <ul>
            <li>Crevings: 30%</li>
            <li>Restaurant: 70%</li>
          </ul>
          <h3>Fairness &amp; Accountability</h3>
          <p>Restaurants are expected to maintain transparency in food availability and real-time item status.</p>
          <p>Repeated refund-triggering behavior such as:</p>
          <ul>
            <li>Non-acceptance of orders</li>
            <li>Cancelling accepted orders</li>
            <li>Unavailable items post-confirmation</li>
          </ul>
          <p>...may result in reduced visibility or service-level restrictions.</p>

          <h2>9. CONFIDENTIALITY</h2>
          <ul>
            <li>Both parties agree to maintain confidentiality of any business, customer, or operational information shared.</li>
            <li>The restaurant shall not disclose any Crevings proprietary data, customer information, or operational process to any third party.</li>
          </ul>

          <h2>10. TERMINATION</h2>
          <ul>
            <li>Either party may terminate the agreement with a 7-day notice by an e-mail.</li>
            <li>In cases of breach of terms, fraud, or repeated customer complaints, Crevings may suspend or terminate the account immediately.</li>
            <li>Any Outstanding dues will be settled as per the last order cycle.</li>
          </ul>

          <h2>11. LIMITATION OF LIABILITY</h2>
          <p>Crevings shall not be held liable for:</p>
          <ul>
            <li>Loss of business or profits.</li>
            <li>Operational losses caused due to delays or technical issues from Food Partner Side.</li>
            <li>Indirect, incidental, or consequential damages.</li>
          </ul>
          <p>Our total liability is limited to the subscription fees paid by the restaurant in the last 30 days.</p>

          <h2>12. GOVERNING LAW & JURISDICTION</h2>
          <p>This Agreement shall be governed by and construed in accordance with the laws of India. Any disputes arising from or in connection with this Agreement shall be subject to the exclusive jurisdiction of the courts of Prayagraj, Uttar Pradesh, India.</p>

          <h2>13. FORCE MAJEURE</h2>
          <p>Crevings and the Restaurant shall not be held liable for any delay or failure in performance of any part of this Agreement caused by events beyond their reasonable control. These may include, but are not limited to:</p>

          <ul>
            <li>Natural disasters (earthquakes, floods, rain , etc.)</li>
            <li>War or terrorism</li>
            <li>Government regulations or lockdowns</li>
            <li>Labor strikes or civil disturbances</li>
            <li>Internet or utility outages</li>
          </ul>
          <p>In such cases, the affected party shall notify the other party at the earliest and resume operations as soon as reasonably possible.</p>

          <h2>14. TECHNICAL DOWNTIME</h2>
          <p>Crevings shall not be held liable for any temporary interruptions, technical errors, or maintenance downtime that may affect the ability of the restaurant to receive or process orders. In the event of a major platform issue, Crevings will make reasonable efforts to notify partners in advance or as early as possible.</p>

          <h2>15. MODIFICATION OF TERMS</h2>
          <p>Crevings reserves the right to modify or update these Terms and Conditions at any time. Restaurants will be notified via email or app notifications. Continued use of the platform following such modifications shall constitute acceptance of the revised terms.</p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
