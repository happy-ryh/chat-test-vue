<template>
  <div>
    <el-col :span="5" :offset="1" class="chat-box">
      <!--      聊天框头部-->
      <el-row type="flex" align="middle" class="table">
        <el-col :span="22">
          <div>社交</div>
        </el-col>
        <el-col :span="2">
          <el-button class="out-button" size="mini" icon="el-icon-close" style="background-color: #6b0b0a"
                     circle></el-button>
        </el-col>
      </el-row>
      <el-row class="user">
        <!--        用户信息-->
        <el-row type="flex">
          <el-col :span="7" style="margin-top: 20px;">
              <el-image style="width: 100px;height: 100px;margin-left: -5px;border: 1px outset #e7da97;" :src="squareUrl"></el-image>
          </el-col>
          <el-col type="flex" :span="15" :offset="1" class="userinfo">
            <el-row style="margin-top: 10px">
              <el-col :span="8">
                <div>等级：{{ grade }}</div>
              </el-col>
              <el-col :span="12">
                <div>{{ username }}</div>
              </el-col>
            </el-row>
            <el-row style="margin-top: 5px">
              <el-col :span="24">
                <div>行会：{{ guild }}</div>
              </el-col>
            </el-row>
            <el-row style="margin-top: 10px" class="friend-input">
              <el-input
                  placeholder=""
                  suffix-icon="el-icon-search"
                  size="mini"
                  v-model="friendName">
              </el-input>
            </el-row>
          </el-col>
        </el-row>
        <!--        行会or好友-->
        <el-row class="chat-tabs">
          <el-tabs v-model="listType" type="border-card">
            <el-tab-pane label="好友" name="friend"><span slot="label"><i class="el-icon-s-custom"></i> 好友</span>
              <el-row class="guild-list">行会</el-row>
            </el-tab-pane>
            <el-tab-pane label="行会" name="guild"><span slot="label"><i class="el-icon-s-flag"></i> 行会</span>
              <el-row class="friend-list">好友</el-row>
            </el-tab-pane>
          </el-tabs>
        </el-row>


      </el-row>
    </el-col>
  </div>
</template>

<script>
export default {
  name: "UserWindow",
  data() {
    return {
      grade: 33,
      username: "aya",
      guild: "Mythos Rising",
      size: 1000,
      squareUrl: require("../assets/avatar.png"),
      friendName: "",
      listType: "friend"
    };
  },
  methods: {}
}

</script>

<style scoped>
.chat-box {
  text-align: center;
  background-color: #4c433c;
  color: #e7da97;
  border-radius: 6px;
  font-size: 17px;
  margin-bottom: 10px;
}

.out-button {
  color: #ffbb5c;
}

.table {
  border: 3px inset #e7da97;
  border-radius: 6px;
}

.userinfo {
  margin-top: 20px;
  margin-left: -5px;
  text-align: left;
  height: 100px;
}

.user {
  border: 3px inset #e7da97;
  border-radius: 6px;
  color: white;
  border-top: none;
}

.friend-input >>> .el-input__inner {
  border: 1px inset #e7da97;
  background-color: #4c433c !important;
  color: white;
  font-size: 16px;
}

.friend-input >>> .el-input__prefix {
  color: #e7da97;
}

.chat-tabs >>> .el-tabs--border-card {
  background: #4c433c !important;
  //border: 2px outset #e7da97;
  //border-bottom: none;
  //color: white;
  //padding-bottom: 3px;
}

.chat-tabs >>> .is-active {
  background: #4c433c;
//margin: 0;
}
.chat-tabs >>> .el-tabs__header {
  background: #4c433c;
//margin: 0;
}

.guild-list {
  //border: 2px outset #e7da97;
  //border-top: none;
}

.friend-list {
  //border: 2px outset #e7da97;
  //border-top: none;
}
</style>