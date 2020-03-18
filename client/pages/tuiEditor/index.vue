<template>
  <ContentCard size="full">
    <h2 slot="content-title">
      에디터 Example
    </h2>
    <div slot="content-container">
      <TuiEditor v-model="editorText" :options="editorOptions" mode="wysiwyg" />
      <TuiEditorViewer :value="editorText" />
    </div>
  </ContentCard>
</template>

<script>
export default {
  data() {
    return {
      editorText: '',
      editorOptions: {
        hideModeSwitch: true,
        toolbarItems: [
          'heading',
          'bold',
          'italic',
          'divider',
          'hr',
          'quote',
          'divider',
          'ul',
          'ol',
          'divider',
          'image',
          'link'
        ]
      }
    }
  }
}
</script>
