import React from "react";

const Leaderboard = () => {
  let rootStyle = {
    listStyle: "none",
    margin: "0",
    padding: "0",
    boxSizing: "border-boc",
  };
  let wrapperStyle = {
    width: "100%",
    height: "100%",
  };
  let lboard_sectionStyle = {
    width: "500px",
    height: "400px",
    margin: "100px auto 0",
    background: "lightblue",
    borderRadius: "5px",
    padding: "25px 40px",
    position: "relative",
  };
  let ulStyle = {
    display: 'flex',
  };
  let liStyle = {
    marginRight: "50px",
    fontSize: "18px",
    fontWeight: "600",
    color: "#3a3d51",
    cursor: "pointer",
  };
  let imgStyle={
    width:'50px'
  }
  let imgImgStyle={
    display:'block',
    width:'100'
  }
  let lboard_wrapStyle={
      position:'absolute',
      top:'70px',
      left:'40px',
      background:'#f8f9fa',
      width:'100%',
      height:'100%',
      borderRadius:'5px'
  }
  let lboard_itemStyle={
      padding:'25px',
  }
  let lboard_memStyle={
    display: 'flex',
	  alignItems: 'center',
	  padding: '15px 0',
	  borderBottom: '1px solid #ffe773'
  }
  let name_barStyle={
    margin: '0 20px',
	  width: 'calc(100% - 150px)'
  }
  let pStyle={
    color: '#3a3d51'
  }
  let spanstyle={
    marginRight: '5px'
  }
  let pointsStyle={
    width: '100px',
	  color: '#3a3d51'
  }
  let barWrapStyle={
    width: '100%',
    height: '5px',
    background: '#d5b000',
    marginTop: '5px',
    borderRadius: '5px',
    position: 'relative',
    overflow: 'hidden'
  }
  let innerBarStyle={
    position: 'absolute',
    top: '0',
    left: '0',
    height: '5px',
    background: '#fff',
    borderRadius: '5px',
    borderTopRightRadius: '0px',
    borderBottomRightRadius: '0px'
  }

  return (
    <div style={rootStyle}>
      <div className="wrapper" style={wrapperStyle}>
        <div className="lboard_section" style={lboard_sectionStyle}>
          <div class="lboard_tabs">
            <div class="tabs">
              <ul style={ulStyle}>
                <li data-li="today" style={liStyle}>
                  Today
                </li>
                <li class="active" data-li="month" style={liStyle}>
                  Month
                </li>
                <li data-li="year" style={liStyle}>
                  Year
                </li>
              </ul>
            </div>
          </div>
          <div className="lboard_wrap" style={lboard_wrapStyle}>
            <div className="lboard_item today" style={lboard_itemStyle}>

                <div class='lboard_mem' style={lboard_memStyle}>
                <div class='points' style={pointsStyle}>
                    195 points
                </div>
                    <div class='name_bar' style={name_barStyle}>
                        <p style={pStyle}><span style={spanstyle}>1.</span>Charles John</p>
                        <div class='bar_wrap' style={barWrapStyle}>
                            <div class='inner_bar' width='95%' style={innerBarStyle}></div>
                        </div>
                    </div>
                </div>
                

                <div class='lboard_mem' style={lboard_memStyle}>
                <div class='points' style={pointsStyle}>
                    180 points
                </div>
                    <div class='name_bar' style={name_barStyle}>
                        <p style={pStyle}><span style={spanstyle}>2.</span>Alex Mike</p>
                        <div class='bar_wrap' style={barWrapStyle}>
                            <div class='inner_bar' width='80%' style={innerBarStyle}></div>
                        </div>
                    </div>
                </div>

                <div class='lboard_mem' style={lboard_memStyle}>
                <div class='points' style={pointsStyle}>
                    155 points
                </div>
                    <div class='name_bar' style={name_barStyle}>
                        <p style={pStyle}><span style={spanstyle}>3.</span>Johnson</p>
                        <div class='bar_wrap' style={barWrapStyle}>
                            <div class='inner_bar' width='60%' style={innerBarStyle}></div>
                        </div>
                    </div>
                </div>

            </div>
          </div>
          <div className="lboard_item month" style={lboard_itemStyle}></div>
          <div className="lboard_item year" style={lboard_itemStyle}></div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
