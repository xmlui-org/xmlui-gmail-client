// Mock data for testing the Gmail client without authentication
// This provides 10 realistic email messages with varying content lengths and images

window.mockGmailData = {
  // Mock user for authentication bypass
  mockUser: {
    email: 'test.user@example.com',
    name: 'Test User',
    picture: 'https://i.pravatar.cc/150?img=1'
  },

  // Mock access token
  mockTokens: {
    access_token: 'mock_access_token_for_testing'
  },

  // Mock messages list (10 emails)
  messagesList: {
    messages: [
      { id: 'msg001', threadId: 'thread001' },
      { id: 'msg002', threadId: 'thread002' },
      { id: 'msg003', threadId: 'thread003' },
      { id: 'msg004', threadId: 'thread004' },
      { id: 'msg005', threadId: 'thread005' },
      { id: 'msg006', threadId: 'thread006' },
      { id: 'msg007', threadId: 'thread007' },
      { id: 'msg008', threadId: 'thread008' },
      { id: 'msg009', threadId: 'thread009' },
      { id: 'msg010', threadId: 'thread010' }
    ],
    nextPageToken: null,
    resultSizeEstimate: 10
  },

  // Full message details with realistic content
  messagesDetails: {
    'msg001': {
      id: 'msg001',
      threadId: 'thread001',
      snippet: 'Hi team, I wanted to share the Q1 roadmap with everyone. We have some exciting features planned including the new dashboard redesign and mobile app improvements.',
      payload: {
        headers: [
          { name: 'From', value: 'Sarah Chen <sarah.chen@techcorp.com>' },
          { name: 'To', value: 'team@techcorp.com' },
          { name: 'Subject', value: 'Q1 2026 Product Roadmap' },
          { name: 'Date', value: 'Mon, 13 Jan 2026 09:15:00 -0800' }
        ],
        body: {
          data: btoa(`<div style="font-family: Arial, sans-serif;">
<h2>Q1 2026 Product Roadmap</h2>
<p>Hi team,</p>
<p>I wanted to share the Q1 roadmap with everyone. We have some exciting features planned including the new dashboard redesign and mobile app improvements.</p>
<img src="https://picsum.photos/600/300?random=1" alt="Roadmap visualization" style="max-width: 100%; height: auto; margin: 20px 0;" />
<h3>Key Initiatives:</h3>
<ul>
  <li><strong>Dashboard Redesign</strong> - Modern UI with improved analytics</li>
  <li><strong>Mobile App v2.0</strong> - Complete overhaul with offline support</li>
  <li><strong>API Integration</strong> - New partner integrations</li>
</ul>
<p>Please review and let me know your thoughts!</p>
<p>Best,<br/>Sarah</p>
</div>`)
        }
      }
    },

    'msg002': {
      id: 'msg002',
      threadId: 'thread002',
      snippet: 'Quick reminder about tomorrow\'s standup at 10am. Please prepare your updates!',
      payload: {
        headers: [
          { name: 'From', value: 'Mike Johnson <mike.j@startup.io>' },
          { name: 'To', value: 'engineering@startup.io' },
          { name: 'Subject', value: 'Standup Reminder - Tomorrow 10am' },
          { name: 'Date', value: 'Sun, 12 Jan 2026 16:30:00 -0800' }
        ],
        body: {
          data: btoa(`<div style="font-family: Arial, sans-serif;">
<p>Quick reminder about tomorrow's standup at 10am.</p>
<p>Please prepare your updates!</p>
<p>- Mike</p>
</div>`)
        }
      }
    },

    'msg003': {
      id: 'msg003',
      threadId: 'thread003',
      snippet: 'I\'ve been researching the best practices for implementing microservices architecture and wanted to share my findings with the team. This is a comprehensive overview...',
      payload: {
        headers: [
          { name: 'From', value: 'Alex Kumar <alex.kumar@devshop.com>' },
          { name: 'To', value: 'architecture-team@devshop.com' },
          { name: 'Subject', value: 'Microservices Architecture Research & Recommendations' },
          { name: 'Date', value: 'Sat, 11 Jan 2026 14:20:00 -0800' }
        ],
        body: {
          data: btoa(`<div style="font-family: Arial, sans-serif;">
<h2>Microservices Architecture Research & Recommendations</h2>
<p>Hi team,</p>
<p>I've been researching the best practices for implementing microservices architecture and wanted to share my findings with the team. This is a comprehensive overview based on industry standards and our specific needs.</p>

<h3>1. Service Communication Patterns</h3>
<p>We should consider using both synchronous REST APIs and asynchronous message queues depending on the use case. For real-time operations, REST is appropriate, while for background jobs and event-driven workflows, message queues provide better decoupling.</p>
<img src="https://picsum.photos/700/400?random=2" alt="Service communication diagram" style="max-width: 100%; height: auto; margin: 20px 0;" />

<h3>2. Data Management</h3>
<p>Each microservice should own its database to maintain autonomy. We'll need to implement the Saga pattern for distributed transactions and use event sourcing for complex workflows.</p>

<h3>3. Service Discovery</h3>
<p>I recommend implementing Consul or Eureka for service discovery. This will allow services to dynamically find and communicate with each other without hardcoded endpoints.</p>

<table border="1" cellpadding="10" style="border-collapse: collapse; margin: 20px 0;">
  <tr>
    <th>Pattern</th>
    <th>Use Case</th>
    <th>Complexity</th>
  </tr>
  <tr>
    <td>API Gateway</td>
    <td>Client requests</td>
    <td>Medium</td>
  </tr>
  <tr>
    <td>Circuit Breaker</td>
    <td>Fault tolerance</td>
    <td>Low</td>
  </tr>
  <tr>
    <td>Event Sourcing</td>
    <td>Audit trails</td>
    <td>High</td>
  </tr>
</table>

<h3>4. Monitoring & Observability</h3>
<p>We need distributed tracing (Jaeger or Zipkin), centralized logging (ELK stack), and metrics collection (Prometheus/Grafana).</p>

<img src="https://picsum.photos/650/350?random=3" alt="Monitoring dashboard" style="max-width: 100%; height: auto; margin: 20px 0;" />

<p>Let's discuss this in our next architecture review meeting. I've created a detailed document with code examples that I can share.</p>

<p>Best regards,<br/>Alex</p>
</div>`)
        }
      }
    },

    'msg004': {
      id: 'msg004',
      threadId: 'thread004',
      snippet: 'The new feature is deployed!',
      payload: {
        headers: [
          { name: 'From', value: 'Deploy Bot <deploy@platform.io>' },
          { name: 'To', value: 'notifications@platform.io' },
          { name: 'Subject', value: 'Deployment Successful - v2.3.1' },
          { name: 'Date', value: 'Fri, 10 Jan 2026 11:45:00 -0800' }
        ],
        body: {
          data: btoa(`<div style="font-family: Arial, sans-serif;">
<h3 style="color: green;">Deployment Successful</h3>
<p>The new feature is deployed!</p>
<p><strong>Version:</strong> v2.3.1</p>
<p><strong>Environment:</strong> Production</p>
<p><strong>Duration:</strong> 3m 42s</p>
</div>`)
        }
      }
    },

    'msg005': {
      id: 'msg005',
      threadId: 'thread005',
      snippet: 'Hi everyone, I wanted to follow up on the user feedback we received last week. We\'ve collected over 200 responses and the insights are quite interesting...',
      payload: {
        headers: [
          { name: 'From', value: 'Emma Rodriguez <emma.r@producthq.com>' },
          { name: 'To', value: 'product-team@producthq.com' },
          { name: 'Subject', value: 'User Feedback Analysis - December 2025' },
          { name: 'Date', value: 'Thu, 9 Jan 2026 13:10:00 -0800' }
        ],
        body: {
          data: btoa(`<div style="font-family: Arial, sans-serif;">
<h2>User Feedback Analysis - December 2025</h2>
<p>Hi everyone,</p>
<p>I wanted to follow up on the user feedback we received last week. We've collected over 200 responses and the insights are quite interesting. Here's a breakdown of the key themes:</p>

<img src="https://picsum.photos/600/400?random=4" alt="Feedback visualization" style="max-width: 100%; height: auto; margin: 20px 0;" />

<h3>Top Requests:</h3>
<ol>
  <li><strong>Dark Mode</strong> (87 mentions) - Users really want this feature</li>
  <li><strong>Better Mobile Experience</strong> (64 mentions) - Especially tablet support</li>
  <li><strong>Keyboard Shortcuts</strong> (52 mentions) - Power users want efficiency</li>
  <li><strong>Export Functionality</strong> (41 mentions) - PDF and CSV exports</li>
</ol>

<h3>Pain Points:</h3>
<p>Several users mentioned that the loading times for large datasets could be improved. We should prioritize performance optimization in the next sprint.</p>

<blockquote style="border-left: 4px solid #ccc; padding-left: 15px; margin: 20px 0; color: #666;">
"I love the product, but waiting 5+ seconds for my dashboard to load is frustrating. Please optimize this!" - User #142
</blockquote>

<p>I'll schedule a review meeting to discuss prioritization. Full report attached in the follow-up email.</p>

<p>Thanks,<br/>Emma</p>
</div>`)
        }
      }
    },

    'msg006': {
      id: 'msg006',
      threadId: 'thread006',
      snippet: 'Meeting rescheduled to 3pm.',
      payload: {
        headers: [
          { name: 'From', value: 'Calendar <calendar@company.com>' },
          { name: 'To', value: 'you@company.com' },
          { name: 'Subject', value: 'Meeting Update: Design Review' },
          { name: 'Date', value: 'Wed, 8 Jan 2026 10:05:00 -0800' }
        ],
        body: {
          data: btoa(`<div style="font-family: Arial, sans-serif;">
<p><strong>Meeting rescheduled to 3pm.</strong></p>
<p>Room: Conference B</p>
</div>`)
        }
      }
    },

    'msg007': {
      id: 'msg007',
      threadId: 'thread007',
      snippet: 'I hope this email finds you well. I wanted to reach out regarding the partnership opportunity we discussed at the conference last month. Our teams have been...',
      payload: {
        headers: [
          { name: 'From', value: 'Jennifer Lee <jennifer.lee@partners.com>' },
          { name: 'To', value: 'business@yourcompany.com' },
          { name: 'Subject', value: 'Partnership Proposal - Q1 2026' },
          { name: 'Date', value: 'Tue, 7 Jan 2026 15:30:00 -0800' }
        ],
        body: {
          data: btoa(`<div style="font-family: Arial, sans-serif;">
<h2>Partnership Proposal</h2>
<p>Dear Team,</p>
<p>I hope this email finds you well. I wanted to reach out regarding the partnership opportunity we discussed at the conference last month. Our teams have been working on a proposal that I believe could be mutually beneficial.</p>

<h3>Proposed Collaboration Areas:</h3>
<ul>
  <li>Co-marketing initiatives reaching our combined audience of 500K+ users</li>
  <li>Technical integration between our platforms for seamless user experience</li>
  <li>Joint webinar series on industry best practices</li>
  <li>Shared booth at major industry conferences</li>
</ul>

<img src="https://picsum.photos/700/350?random=5" alt="Partnership visualization" style="max-width: 100%; height: auto; margin: 20px 0;" />

<h3>Expected Benefits:</h3>
<p>Based on our analysis, this partnership could result in:</p>
<ul>
  <li>30% increase in user acquisition for both platforms</li>
  <li>Enhanced product offerings for our users</li>
  <li>Reduced customer acquisition costs through shared marketing</li>
  <li>Stronger competitive positioning in the market</li>
</ul>

<p>I've attached a detailed proposal document. Would you be available for a call next week to discuss this further?</p>

<p>Looking forward to your response.</p>

<p>Best regards,<br/>Jennifer Lee<br/>VP of Partnerships<br/>partners.com</p>
</div>`)
        }
      }
    },

    'msg008': {
      id: 'msg008',
      threadId: 'thread008',
      snippet: 'Code review complete. All checks passed.',
      payload: {
        headers: [
          { name: 'From', value: 'GitHub <notifications@github.com>' },
          { name: 'To', value: 'dev@yourcompany.com' },
          { name: 'Subject', value: '[repo/main] PR #234: Add user authentication' },
          { name: 'Date', value: 'Mon, 6 Jan 2026 09:20:00 -0800' }
        ],
        body: {
          data: btoa(`<div style="font-family: Arial, sans-serif;">
<h3>Pull Request #234</h3>
<p><strong>Code review complete</strong></p>
<p>All checks passed.</p>
<p><a href="#">View on GitHub</a></p>
</div>`)
        }
      }
    },

    'msg009': {
      id: 'msg009',
      threadId: 'thread009',
      snippet: 'As we enter the new year, I wanted to take a moment to reflect on our achievements in 2025 and outline our strategic priorities for 2026...',
      payload: {
        headers: [
          { name: 'From', value: 'David Park <david.park@ceo.company.com>' },
          { name: 'To', value: 'all-staff@company.com' },
          { name: 'Subject', value: 'Looking Back at 2025 & Forward to 2026' },
          { name: 'Date', value: 'Sun, 5 Jan 2026 08:00:00 -0800' }
        ],
        body: {
          data: btoa(`<div style="font-family: Arial, sans-serif;">
<h2>Looking Back at 2025 & Forward to 2026</h2>
<p>Dear Team,</p>
<p>As we enter the new year, I wanted to take a moment to reflect on our achievements in 2025 and outline our strategic priorities for 2026.</p>

<h3>2025 Highlights</h3>
<img src="https://picsum.photos/650/300?random=6" alt="2025 achievements" style="max-width: 100%; height: auto; margin: 20px 0;" />

<p>This past year was exceptional for our company:</p>
<ul>
  <li>Grew from 50 to 120 employees</li>
  <li>Achieved $10M ARR milestone</li>
  <li>Expanded to 3 new international markets</li>
  <li>Received multiple industry awards for innovation</li>
  <li>Shipped 15 major product updates</li>
</ul>

<h3>2026 Strategic Priorities</h3>
<p>This year, we're focusing on three key areas:</p>

<h4>1. Product Excellence</h4>
<p>We'll continue investing heavily in product development, with a focus on AI-powered features and mobile-first design. Our goal is to become the industry standard for our category.</p>

<h4>2. Customer Success</h4>
<p>We're doubling our customer success team and implementing new onboarding programs to ensure every customer achieves their goals with our platform.</p>

<img src="https://picsum.photos/600/350?random=7" alt="Customer success metrics" style="max-width: 100%; height: auto; margin: 20px 0;" />

<h4>3. Team Growth & Culture</h4>
<p>We plan to grow to 200 employees by year-end while maintaining our unique culture. We're introducing new benefits including unlimited PTO, quarterly team offsites, and enhanced learning & development budgets.</p>

<h3>What This Means for You</h3>
<p>Each department will receive detailed goals for Q1 from your managers this week. We're also planning an all-hands meeting on January 15th to discuss these priorities in more depth and answer your questions.</p>

<p>Thank you for your incredible dedication and hard work. I'm excited about what we'll accomplish together this year!</p>

<p>Best,<br/>David Park<br/>CEO</p>
</div>`)
        }
      }
    },

    'msg010': {
      id: 'msg010',
      threadId: 'thread010',
      snippet: 'Bug fix deployed for the login issue.',
      payload: {
        headers: [
          { name: 'From', value: 'DevOps <devops@company.com>' },
          { name: 'To', value: 'engineering@company.com' },
          { name: 'Subject', value: 'Hotfix Deployed - Login Issue Resolved' },
          { name: 'Date', value: 'Sat, 4 Jan 2026 22:15:00 -0800' }
        ],
        body: {
          data: btoa(`<div style="font-family: Arial, sans-serif;">
<h3 style="color: green;">Hotfix Deployed</h3>
<p><strong>Bug fix deployed for the login issue.</strong></p>
<img src="https://picsum.photos/500/250?random=8" alt="System status" style="max-width: 100%; height: auto; margin: 20px 0;" />
<p>Version: v2.3.2<br/>
Deployment time: 22:15 PST<br/>
Affected users: ~150</p>
<p>All systems operational</p>
</div>`)
        }
      }
    }
  },

  // Helper function to get message details by ID
  getMessageDetails: function(messageId) {
    return this.messagesDetails[messageId] || null;
  }
};
