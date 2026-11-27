<script setup lang="ts">
import { Users, Clock, ShieldCheck, CheckCircle2, DollarSign } from 'lucide-vue-next'

const staffOnDuty = [
  { name: 'Kavita Nair', role: 'Store Manager', clockIn: '08:45 AM', status: 'On Duty', badge: 'Manager Pin' },
  { name: 'Rohan Sharma', role: 'Head Barista / Cashier', clockIn: '09:02 AM', status: 'On Duty', badge: 'Billing Rights' },
  { name: 'Deepak V.', role: 'Kitchen Expediter', clockIn: '09:15 AM', status: 'On Duty', badge: 'KDS Access' }
]

const recentExpenses = [
  { item: 'Morning dairy & milk top-up', amount: '₹1,240', category: 'Raw Materials', approved: true },
  { item: 'Store cleaning & sanitized supplies', amount: '₹380', category: 'Maintenance', approved: true }
]
</script>

<template>
  <div
    class="w-full bg-[#0E0E0E] text-white font-ui rounded-xl overflow-hidden border border-white/[0.08]"
    role="region"
    aria-label="Sample Business Operations & Staff Management Console"
  >
    <!-- Header -->
    <div class="flex items-center justify-between border-b border-white/[0.08] bg-[#141414] px-4 py-2.5 text-xs">
      <div class="flex items-center gap-2">
        <Users class="h-4 w-4 text-brand" />
        <span class="font-semibold text-white">Daily Operations &amp; Team Management</span>
      </div>
      <div class="flex items-center gap-2 text-xs text-zinc-400">
        <span class="inline-flex items-center gap-1 text-brand">
          <Clock class="h-3.5 w-3.5" />
          Shift: Morning (3 Active Staff)
        </span>
      </div>
    </div>

    <!-- Active Staff & Attendance -->
    <div class="p-4 space-y-4">
      <div class="space-y-2">
        <div class="flex items-center justify-between text-xs font-medium text-zinc-400 uppercase tracking-wider px-1">
          <span>Active Shift Attendance</span>
          <span class="text-brand">100% On-Time Clock-in</span>
        </div>
        <div
          v-for="s in staffOnDuty"
          :key="s.name"
          class="flex items-center justify-between p-2.5 rounded-lg border border-white/[0.06] bg-[#141414] text-xs"
        >
          <div class="flex items-center gap-3">
            <div class="h-8 w-8 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center text-brand font-semibold text-xs">
              {{ s.name.charAt(0) }}
            </div>
            <div>
              <div class="font-semibold text-white">{{ s.name }}</div>
              <div class="text-xs text-zinc-400">{{ s.role }} · Clock-in: {{ s.clockIn }}</div>
            </div>
          </div>
          <span class="px-2 py-0.5 rounded text-xs bg-brand/10 text-brand border border-brand/20">
            {{ s.status }}
          </span>
        </div>
      </div>

      <!-- Petty Cash / Daily Expense Log -->
      <div class="space-y-2 pt-2 border-t border-white/[0.06]">
        <div class="text-xs font-medium text-zinc-400 uppercase tracking-wider px-1">
          Today's Approved Expenses
        </div>
        <div
          v-for="exp in recentExpenses"
          :key="exp.item"
          class="flex items-center justify-between p-2.5 rounded-lg border border-white/[0.06] bg-[#141414] text-xs"
        >
          <div class="text-zinc-300">
            <div>{{ exp.item }}</div>
            <div class="text-xs text-zinc-500">{{ exp.category }}</div>
          </div>
          <div class="flex items-center gap-2">
            <span class="font-semibold text-white">{{ exp.amount }}</span>
            <CheckCircle2 class="h-3.5 w-3.5 text-brand" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


