<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
</script>

<template >
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Управляйте своим списком дел в Интернете</template>
    <p>
        Приложение для управления задачами, способное работать на разных платформах, обеспечит вам доступ к списку задач, где бы вы ни находились. Дома вы можете пользоваться классическим приложением, а в дороге — его мобильной версией. В любом случае ваш день будет четко организован.
    </p>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Умело планируйте свой день</template>

    <p>
      Настройтесь на успех с помощью функции “Мой день”, которая предоставляет интеллектуальные персонализированные рекомендации по обновлению ежедневных и еженедельных списков. Располагая классическим приложением Microsoft To Do и его мобильной версией, вы легко будете справляться с задачами в течение всего дня.
    </p>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Легко делитесь информацией</template>
    <p>
      Поддерживайте контакт с родными, близкими и коллегами, обмениваясь с ними списками дел в Интернете.
    </p>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Упрощайте управление задачами</template>
    <p>
      Разбивайте задачи на простые шаги, устанавливайте сроки и настраивайте напоминания для ежедневного контрольного списка, чтобы следить за осуществлением поставленных целей.
    </p>
  </WelcomeItem>

</template>
