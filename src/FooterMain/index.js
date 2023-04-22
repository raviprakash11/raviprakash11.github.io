import React from "react";
import "../layout/LayoutPage.scss";

export default function FooterMainPage() {
  return (
    <section style={{width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
      <div style={{width:'80%', display:'flex', justifyContent:'space-between', alignItems:'flex-end', paddingBottom:'4px', fontSize:'2.2vh', letterSpacing:'.8px', color:'grey'}}>
        <div>
            <div>&#169;2023. All Rights Reserved.</div>
        </div>
        <div>
          <div>Powered by @Novaenergon</div>
        </div>
      </div>
    </section>
  );
}
