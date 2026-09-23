import type { APIRoute } from 'astro';
import { site } from '@/config/site';

export const GET: APIRoute = () => {
  const content = `# VibTools Open Source Hub - Robots Configuration
# Open access for web crawlers, search engines, and AI agents

User-agent: *
Allow: /

# Dedicated AI and LLM agents
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: cohere-ai
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: Meta-ExternalAgent
Allow: /

User-agent: Amazonbot
Allow: /

User-agent: Bytespider
Allow: /

# AI-ready manifests and LLM context endpoints
# LLMs specification: ${site.url}/llms.txt
# LLMs full documentation: ${site.url}/llms-full.txt
# Structured AI index (JSON): ${site.url}/ai-index.json
# AI Index web page: ${site.url}/ai-index/

Sitemap: ${site.url}/sitemap.xml
Host: https://vibtools.github.io
`;

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
