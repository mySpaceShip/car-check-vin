<template>
    <div id="app" class="app">
            <router-view></router-view>
            <!--<LeftSidebar></LeftSidebar>-->
            <!--<div class="sheet-block">-->
                <!--<CreateReportForm></CreateReportForm>-->
                <!--<ReportTable></ReportTable>-->
            <!--</div>-->


        <!--<alive-check></alive-check>-->
        <!--<filter-of-proxies></filter-of-proxies>-->
    </div>
</template>

<script>
import CreateReportForm from './components/Autocode/CreateReportForm.vue';
import LeftSidebar from './components/Autocode/LeftSidebar.vue';
import ReportTable from './components/Autocode/ReportTable.vue';
import Authentication from './components/Autocode/Authentication.vue';


export default {
  components: {
    Authentication, ReportTable, LeftSidebar, CreateReportForm,
  },

};
</script>

<style lang="less">
    .app {
        justify-content: center;
        display: flex;
        width: 100%;
    }
    @import "./style/app";
</style>
