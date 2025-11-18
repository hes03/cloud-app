import { createMember } from "./memberService.mjs";

const member = createMember("nice")
console.log(`생성된 회원은 ${member.name}`);

//출력결과 예측
// -> 생성된 회원은 { id: 111111, name: 'nice'}