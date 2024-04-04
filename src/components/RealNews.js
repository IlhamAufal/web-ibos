import React from "react";
import { Container } from "react-bootstrap";
import '../style/landingpage.css';
import '../style/newspage.css';
import newsimg from '../asset/percobaanNews.svg';
import pfp from '../asset/pfp.svg';

const RealNews = () => {
    const place = 'JAKARTA - ';
    const tanggal = 'Jumat, 12 April 2024';
    const Author = 'Guy hawkins';
    const AuthorPosition = 'Distribution Maintenance Server';

  return (
    <div className="myBG">
  <div className="redBox"></div>
  <div className="container-column">
  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px', marginBottom: '10px', marginLeft:'80px' }}>
  <div style={{ width: 'calc(80% - 10px)' }}>
    <Container>
      <h4><b>Lorem ipsum dolor sit amet consectetur.</b></h4>
      <p className="myNewsCategory">Social</p>
      <div style={{ marginBottom: '5px', maxWidth: '1000px', fontSize: '16px', textAlign: 'justify' }}>
        <img src={newsimg} />
        <p style={{ maxWidth: '920px', marginTop: '10px', marginBottom: '100px' }}>
          <b>{place}</b>
          Lorem ipsum dolor sit amet consectetur. Ac nibh felis leo egestas ut nisi. Nam augue id enim in. Scelerisque urna bibendum tortor enim.
          Integer imperdiet in ultrices interdum lacus. Enim nam non phasellus diam. Sem mattis eu pharetra non et sed viverra. Aliquam nibh nisl nunc massa nec a.
          Massa elit nisl vitae orci. Integer cras sem sed aenean egestas. Sed nisi et pellentesque euismod convallis purus cras.
          Est velit morbi ut convallis lobortis sed scelerisque porta ut.Tellus duis eu volutpat non pellentesque leo nec massa.
          Purus ultricies ridiculus nunc leo nam. Lacus massa blandit pulvinar penatibus imperdiet dictum id imperdiet adipiscing.
          Morbi lorem at amet tincidunt tincidunt auctor non platea quis. Tellus tristique tellus cras nam vel quis blandit.
          <br />
          <b>Sub Judul </b>
          Sit pulvinar diam mollis volutpat. In ut elit dolor sit. Ornare enim elit tincidunt et dui. Dolor pellentesque nulla lacus in libero. Lorem arcu facilisis elit pharetra nunc tincidunt. Accumsan at sed nunc egestas at vitae mi ullamcorper ipsum. Orci dapibus sed egestas a ac tempor elementum in tristique. Pulvinar volutpat diam morbi sem gravida egestas praesent. Neque volutpat cras lacus erat. Non in risus sed tellus porttitor vitae nam vel.
          <br />
          ({tanggal})
        </p>
      </div>
      <h6><b>Author:</b></h6>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ marginRight: '10px' }}>
          <img src={pfp} style={{ width: '130px', height: '130px', borderRadius: '50%', objectFit: 'cover' }} />
        </div>
        <div style={{ marginLeft: '20px' }}>
          <h6><b>{Author}</b></h6>
          <p>{AuthorPosition}</p>
        </div>
      </div>
    </Container>
  </div>

</div>

  </div>
  
</div>

  );
};

export default RealNews;
