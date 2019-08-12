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
import CreateReportForm from './components/Autocode/CreateReportForm'
import LeftSidebar from './components/Autocode/LeftSidebar'
import ReportTable from './components/Autocode/ReportTable'
import Authentication from './components/Autocode/Authentication'


export default {
  components: {Authentication, ReportTable, LeftSidebar, CreateReportForm},

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
