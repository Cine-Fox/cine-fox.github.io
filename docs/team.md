---
layout: home
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/zhouyixun.png',
    name: 'Eason',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/ZhouYixun' },
      { icon: 'youtube', link: 'https://www.youtube.com/channel/UCIGQUYUSgaH4A9q1bw6SRkA' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Team
    </template>
    <template #lead>
     Cine Fox is mainly developed by the following core members.
    </template>
  </VPTeamPageTitle>
  <div style="text-align: center">
  <VPTeamMembers 
    size="medium"
    :members="members"
  />
</div>
</VPTeamPage>