<template>
  <div>
    <ContentCard size="full">
      <h2 slot="content-title">
        기본정보
        <n-link class="btn btn-sm ml-1" to="/memberMgr/allMemberMgr/resetPw"
          >비밀번호 초기화</n-link
        >
      </h2>
      <div slot="content-container">
        <!-- <Table :tHeader="tHeader" :tBody="detail.memberIn" /> -->
        <table class="w-full text-left">
          <thead class="border-b border-gray-400">
            <th>판매지점</th>
            <th>지도상태</th>
            <th>회원명</th>
            <th>아이디</th>
            <th>생년월일</th>
            <th>보호자명</th>
            <th>연락처</th>
            <th>주소</th>
            <th>최초예약일</th>
            <th>적립포인트</th>
            <th>버디코인</th>
          </thead>
          <tbody>
            <tr>
              <td>{{ detail.memberIn.agency }}</td>
              <td>{{ detail.memberIn.guideSts }}</td>
              <td>{{ detail.memberIn.memNo }}</td>
              <td>{{ detail.memberIn.memNm }}</td>
              <td>{{ detail.memberIn.memLoginId }}</td>
              <td>{{ detail.memberIn.memBirthday }}</td>
              <td>{{ detail.memberIn.parNm }}</td>
              <td>{{ detail.memberIn.jidoStartDt }}</td>
              <td>{{ detail.profile.point }}</td>
              <td>{{ detail.profile.rewardPoint }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </ContentCard>
    <ContentCard size="full">
      <h2 slot="content-title">
        회비정보
      </h2>
      <div slot="content-container">
        <!-- <Table :tHeader="tHeader" :tBody="tBody" /> -->
        <table class="w-full text-left">
          <thead class="border-b border-gray-400">
            <tr>
              <th rowspan="2">지도상품</th>
              <th rowspan="2">지도 개시일</th>
              <th rowspan="2">당월 지도회비</th>
              <th rowspan="2">최종 결제수단</th>
              <th colspan="3">지도회비상태</th>
              <th rowspan="2">미입금 금액</th>
              <th rowspan="2">지도회원모집(지점/성명)</th>
              <th rowspan="2">지도교사(지점/성명)</th>
            </tr>
            <tr>
              <th>전월잔액</th>
              <th>당월입금</th>
              <th>당월잔액</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in detail.contractFeeList" :key="index">
              <td>{{ item.productGbn }}</td>
              <td>{{ detail.memberIn.jidoStartDt }}</td>
              <td>{{ item.nowGuideFee }}</td>
              <td>{{ item.newGuideFee }}</td>
              <td>{{ item.beAmt }}</td>
              <td>{{ item.nowAmt }}</td>
              <td>{{ item.nowvVal }}</td>
              <td>{{ item.dueAmt }}</td>
              <td>{{ item.agencySales }}</td>
              <td>{{ item.agencyTutor }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </ContentCard>
    <ContentCard
      v-for="(item, index) in detail.contractSEQList"
      :key="index"
      :toggle="true"
      size="full"
      @getContract="getContract(item.contractSeq, item.gbn)"
    >
      <h2 slot="content-title">
        SEQ {{ item.contractSeq }}
        <span class="text-xs rounded bg-purple-300 text-white px-2 py-1 ml-1">{{
          item.productNm
        }}</span>
        <span class="text-xs rounded bg-purple-300 text-white px-2 py-1 ml-1">{{
          item.studyStateNm
        }}</span>
        <span class="ml-1 text-xs text-gray-500">{{
          item.subscriptionTerms
        }}</span>
      </h2>
      <div slot="content-container">
        <table class="w-full text-left mb-12">
          <thead class="border-b border-gray-400">
            <tr>
              <th>지도상품</th>
              <th>지점1</th>
              <th>성명1</th>
              <th>지점2</th>
              <th>성명2</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item2, index2) in contractList[item.contractSeq - 1]
                .contractSEQ4Sales"
              :key="index2"
            >
              <td />
              <td>{{ item2.branchNm }}</td>
              <td>{{ item2.agencyNm }}</td>
              <td />
              <td />
            </tr>
          </tbody>
        </table>
        <table class="w-full text-left mb-12">
          <thead class="border-b border-gray-400">
            <tr>
              <th>상품코스</th>
              <th>구독기간</th>
              <th>유보기간</th>
              <th>학습상태</th>
              <th>판매구분</th>
              <th>취소일자</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item3, index3) in contractList[item.contractSeq - 1]
                .contractSEQ4Product"
              :key="index3"
            >
              <td>{{ item3.studyCrs }}</td>
              <td>{{ item3.subscribeBegin }}~{{ item3.subscribeEnd }}</td>
              <td>{{ item3.rbeginPeriod }}</td>
              <td>{{ item3.studySts }}</td>
              <td>{{ item3.saleGbn }}</td>
              <td>no matched key</td>
            </tr>
          </tbody>
        </table>
        <table class="w-full text-left">
          <thead class="border-b border-gray-400">
            <tr>
              <th>배송연월</th>
              <th>상품</th>
              <th>호</th>
              <th>배송일자</th>
              <th>반품일자</th>
              <th>배송종류</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item4, index4) in contractList[item.contractSeq - 1]
                .contractSEQ4Delivery"
              :key="index4"
            >
              <td>{{ item4.studyCrs }}</td>
              <td>{{ item4.subscribeBegin }}~{{ item4.subscribeEnd }}</td>
              <td>{{ item4.rbeginPeriod }}</td>
              <td>{{ item4.studySts }}</td>
              <td>{{ item4.saleGbn }}</td>
              <td>no matched key</td>
            </tr>
          </tbody>
        </table>
      </div>
    </ContentCard>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  async asyncData({ route, store }) {
    await store.dispatch('memberMgr/memberMgr/getDetailMember', route.params)
    await store.dispatch('memberMgr/memberMgr/getContractOnce')
  },
  computed: {
    ...mapState({
      detail: (state) => state.memberMgr.memberMgr.memberDetail,
      contractList: (state) => state.memberMgr.memberMgr.contractList
    })
  },
  methods: {
    async getContract(contractSeq, gbn) {
      const param = {
        iMemNo: this.detail.memberIn.memNo,
        iSeqNo: contractSeq,
        iGbn: gbn
      }
      await this.$store.dispatch('memberMgr/memberMgr/getContract', param)
    }
  }
}
</script>
