<script setup lang="ts">
import { UserCheck, Award, MessageSquare, Clock, Heart } from 'lucide-vue-next'
</script>

<template>
  <div
    class="w-full bg-[#0E0E0E] text-white font-ui rounded-xl overflow-hidden border border-white/[0.08]"
    role="region"
    aria-label="Sample CRM & Loyalty Profile"
  >
    <!-- Header -->
    <div class="flex items-center justify-between border-b border-white/[0.08] bg-[#141414] px-4 py-2.5 text-xs">
      <div class="flex items-center gap-2">
        <UserCheck class="h-4 w-4 text-brand" />
        <span class="font-semibold text-white">Guest CRM &amp; Loyalty Profile</span>
      </div>
      <span class="px-2 py-0.5 rounded bg-brand/10 text-brand text-xs font-semibold">
        Gold Club Member
      </span>
    </div>

    <!-- Customer Card -->
    <div class="p-4 space-y-3.5">
      <div class="flex items-start justify-between">
        <div>
          <h4 class="text-sm font-bold text-white">Aravind Krishnamurthy</h4>
          <span class="text-xs text-zinc-400 font-mono">+91 98450 ••••• · Indiranagar Regular</span>
        </div>
        <div class="h-8 w-8 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center text-brand">
          <Award class="h-4 w-4" />
        </div>
      </div>

      <!-- Quick Metrics Grid -->
      <div class="grid grid-cols-3 gap-2 text-center">
        <div class="p-2 rounded-lg bg-[#141414] border border-white/[0.06]">
          <div class="text-xs text-zinc-400">Total Visits</div>
          <div class="text-sm font-bold text-white tabular-nums mt-0.5">18</div>
        </div>
        <div class="p-2 rounded-lg bg-[#141414] border border-white/[0.06]">
          <div class="text-xs text-zinc-400">Lifetime Spend</div>
          <div class="text-sm font-bold text-white tabular-nums mt-0.5">₹12,450</div>
        </div>
        <div class="p-2 rounded-lg bg-[#141414] border border-white/[0.06]">
          <div class="text-xs text-zinc-400">Reward Balance</div>
          <div class="text-sm font-bold text-brand tabular-nums mt-0.5">340 Pts</div>
        </div>
      </div>

      <!-- Guest Note & WhatsApp Communication -->
      <div class="rounded-lg bg-[#141414] p-3 border border-white/[0.06] space-y-2 text-xs">
        <div class="flex items-center gap-1.5 text-zinc-300 font-medium">
          <Heart class="h-3.5 w-3.5 text-brand" />
          <span>Kitchen Preference: Filter coffee extra hot, no sugar.</span>
        </div>
        <div class="flex items-center justify-between pt-2 border-t border-white/[0.06] text-xs text-zinc-400">
          <span class="flex items-center gap-1">
            <MessageSquare class="h-3 w-3 text-brand" /> WhatsApp E-Bill Delivered (Delivered 12:48 PM)
          </span>
          <span class="text-brand font-medium">5.0 ★ Review</span>
        </div>
      </div>
    </div>
  </div>
</template>
