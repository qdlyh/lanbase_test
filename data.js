{
    "commits": null,
    "filesCount": {
        "fileCount": 3,
        "addCount": 17,
        "delCount": 4
    },
    "files": [
        {
            "path": "research-development-service/src/main/java/com/elanbase/res/controller/iteration/IterationImportController.java",
            "sha": "029b19fd779c3e1d16481cf9f057dd3c6faf34be",
            "diffContent": "diff --git a/research-development-service/src/main/java/com/elanbase/res/controller/iteration/IterationImportController.java b/research-development-service/src/main/java/com/elanbase/res/controller/iteration/IterationImportController.java\nindex e486a7b..f66e759 100644\n--- a/research-development-service/src/main/java/com/elanbase/res/controller/iteration/IterationImportController.java\n+++ b/research-development-service/src/main/java/com/elanbase/res/controller/iteration/IterationImportController.java\n@@ -38,12 +38,23 @@ public class IterationImportController {\n \t\tthis.iterationImportService = iterationImportService;\n \t}\n \n+\t/**\n+\t * 迭代管理-下载模板\n+\t * @param response\n+\t * @throws IOException\n+\t */\n \t@ApiOperation(value = \"下载模板\")\n \t@GetMapping(ServicePathConstant.PREFIX_PUBLIC_PATH + \"/iteration/download/importTemplate\")\n \tpublic void downloadTestCase(HttpServletResponse response) throws IOException {\n \t\tFileDownloadUtils.download(new ClassPathResource(\"template/迭代导入模板.xlsx\"),response);\n \t}\n \n+\t/**\n+\t * 迭代管理-导入数据\n+\t * @param file       导入文件\n+\t * @param projectId  项目Id\n+\t * @throws IOException\n+\t */\n \t@ApiOperation(value = \"导入数据\")\n \t@ApiImplicitParams({\n \t\t\t@ApiImplicitParam(name = \"file\", value = \"文件\", dataTypeClass = MultipartFile.class, required = true,",
            "status": "modified",
            "pullReviewComments": [
                {
                    "body": "开始评审",
                    "commitId": "029b19fd779c3e1d16481cf9f057dd3c6faf34be",
                    "createTime": "2025-03-21 10:09:19",
                    "diffHunk": "@@ -39,2 +39,4 @@\n \t}\n \n+\t/**\n+\t * 迭代管理-下载模板",
                    "path": "research-development-service/src/main/java/com/elanbase/res/controller/iteration/IterationImportController.java",
                    "position": 42,
                    "orientation": "right",
                    "author": "lbs_cz"
                },
                {
                    "body": "开始评审2",
                    "commitId": "029b19fd779c3e1d16481cf9f057dd3c6faf34be",
                    "createTime": "2025-03-21 10:09:54",
                    "diffHunk": "@@ -46,1 +51,4 @@\n \n+\t/**\n+\t * 迭代管理-导入数据\n+\t * @param file       导入文件",
                    "path": "research-development-service/src/main/java/com/elanbase/res/controller/iteration/IterationImportController.java",
                    "position": 54,
                    "orientation": "right",
                    "author": "lbs_cz"
                },
                {
                    "body": "案说法",
                    "commitId": "029b19fd779c3e1d16481cf9f057dd3c6faf34be",
                    "createTime": "2025-03-21 15:08:24",
                    "diffHunk": "@@ -38,12 +38,23 @@ public class IterationImportController {\n \t\tthis.iterationImportService = iterationImportService;\n \t}",
                    "path": "research-development-service/src/main/java/com/elanbase/res/controller/iteration/IterationImportController.java",
                    "position": 39,
                    "orientation": "left",
                    "author": "sd_xiaomi"
                },
                {
                    "body": "444",
                    "commitId": "029b19fd779c3e1d16481cf9f057dd3c6faf34be",
                    "createTime": "2025-03-21 15:08:28",
                    "diffHunk": "@@ -38,12 +38,23 @@ public class IterationImportController {\n \t\tthis.iterationImportService = iterationImportService;\n \t}\n \n+\t/**",
                    "path": "research-development-service/src/main/java/com/elanbase/res/controller/iteration/IterationImportController.java",
                    "position": 41,
                    "orientation": "right",
                    "author": "sd_xiaomi"
                },
                {
                    "body": "我是原文回复",
                    "commitId": "029b19fd779c3e1d16481cf9f057dd3c6faf34be",
                    "createTime": "2025-03-21 15:32:01",
                    "diffHunk": "@@ -47,3 +57,4 @@\n+\t */\n \t@ApiOperation(value = \"导入数据\")\n \t@ApiImplicitParams({\n \t\t\t@ApiImplicitParam(name = \"file\", value = \"文件\", dataTypeClass = MultipartFile.class, required = true,",
                    "path": "research-development-service/src/main/java/com/elanbase/res/controller/iteration/IterationImportController.java",
                    "position": 49,
                    "orientation": "left",
                    "author": "sd_xiaomi"
                }
            ],
            "isLoad": true
        },
        {
            "path": "research-development-service/src/main/java/com/elanbase/res/controller/permissionApply/PermApplyTemplateFieldController.java",
            "sha": "c7a52076531626e41b523d7cc1b43ba5f1ed87bf",
            "diffContent": "diff --git a/research-development-service/src/main/java/com/elanbase/res/controller/permissionApply/PermApplyTemplateFieldController.java b/research-development-service/src/main/java/com/elanbase/res/controller/permissionApply/PermApplyTemplateFieldController.java\nindex 9ce513b..1524a5b 100644\n--- a/research-development-service/src/main/java/com/elanbase/res/controller/permissionApply/PermApplyTemplateFieldController.java\n+++ b/research-development-service/src/main/java/com/elanbase/res/controller/permissionApply/PermApplyTemplateFieldController.java\n@@ -37,7 +37,7 @@ public class PermApplyTemplateFieldController {\n \n     /**\n      * 权限申请-创建页面模版\n-     *\n+     * 创建页面模版\n      * @return  权限申请-创建页面模版\n      * @throws Exception\n      */\n@@ -48,7 +48,7 @@ public class PermApplyTemplateFieldController {\n     }\n     /**\n      * 获取编辑页面模版\n-     *\n+     * 获取编辑页面模版\n      * @param id\n      * @return\n      * @throws Exception\n@@ -62,7 +62,7 @@ public class PermApplyTemplateFieldController {\n \n     /**\n      * 查看页面模版\n-     *\n+     * 查看页面模版\n      * @param id\n      * @return\n      * @throws Exception\n",
            "status": "modified",
            "pullReviewComments": [
                {
                    "body": "开始评审",
                    "commitId": "c7a52076531626e41b523d7cc1b43ba5f1ed87bf",
                    "createTime": "2025-03-21 10:26:01",
                    "diffHunk": "@@ -38,3 +38,3 @@\n     /**\n      * 权限申请-创建页面模版\n-     *\n+     * 创建页面模版",
                    "path": "research-development-service/src/main/java/com/elanbase/res/controller/permissionApply/PermApplyTemplateFieldController.java",
                    "position": 40,
                    "orientation": "right",
                    "author": "lbs_cz"
                },
                {
                    "body": "代码行级评论",
                    "commitId": "c7a52076531626e41b523d7cc1b43ba5f1ed87bf",
                    "createTime": "2025-03-21 10:36:49",
                    "diffHunk": "@@ -49,3 +49,3 @@\n     /**\n      * 获取编辑页面模版\n-     *\n+     * 获取编辑页面模版",
                    "path": "research-development-service/src/main/java/com/elanbase/res/controller/permissionApply/PermApplyTemplateFieldController.java",
                    "position": 51,
                    "orientation": "right",
                    "author": "lbs_cz"
                },
                {
                    "body": "原文2",
                    "commitId": "029b19fd779c3e1d16481cf9f057dd3c6faf34be",
                    "createTime": "2025-03-21 16:12:59",
                    "diffHunk": "@@ -39,3 +39,3 @@\n      * 权限申请-创建页面模版\n-     *\n+     * 创建页面模版\n      * @return  权限申请-创建页面模版",
                    "path": "research-development-service/src/main/java/com/elanbase/res/controller/permissionApply/PermApplyTemplateFieldController.java",
                    "position": 41,
                    "orientation": "left",
                    "author": "sd_xiaomi"
                }
            ],
            "isLoad": true
        },
        {
            "path": "research-development-service/src/main/java/com/elanbase/res/controller/permissionApply/PermissionApplyController.java",
            "sha": "c7a52076531626e41b523d7cc1b43ba5f1ed87bf",
            "diffContent": "diff --git a/research-development-service/src/main/java/com/elanbase/res/controller/permissionApply/PermissionApplyController.java b/research-development-service/src/main/java/com/elanbase/res/controller/permissionApply/PermissionApplyController.java\nindex bedc56a..61e0003 100644\n--- a/research-development-service/src/main/java/com/elanbase/res/controller/permissionApply/PermissionApplyController.java\n+++ b/research-development-service/src/main/java/com/elanbase/res/controller/permissionApply/PermissionApplyController.java\n@@ -42,6 +42,7 @@ public class PermissionApplyController {\n \n     /**\n      * 权限申请 - 查询流程场景分类\n+     * 查询流程场景分类\n      *\n      * @return 流程场景分类\n      */\n@@ -53,7 +54,7 @@ public class PermissionApplyController {\n \n     /**\n      * 权限申请 - 列表查询\n-     *\n+     * 列表查询\n      * @return 主工单列表\n      */\n     @ApiOperation(\"权限申请-列表查询\")\n@@ -64,6 +65,7 @@ public class PermissionApplyController {\n \n     /**\n      * 权限申请 - 权限申请归属工单的所有详细项\n+     * 权限申请归属工单的所有详细项\n      *\n      * @param permissionApplyId 主单id\n      * @return 权限申请详细项",
            "status": "modified",
            "pullReviewComments": [],
            "isLoad": true
        }
    ]
}