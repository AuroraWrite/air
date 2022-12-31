import styled from 'styled-components'

export const BrowerWrapper = styled.div`
  position: fixed;
  z-index: 999;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgb(33, 33, 33);
  opacity: 1;
  display: flex;
  flex-direction: column;

  .top {
    position: relative;
    height: 86px;

    .close-btn {
      cursor: pointer;
      color: #fff;
      position: absolute;
      top: 15px;
      right: 25px;
    }
  }

  .slider {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    flex: 4;

    .control {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      color: #fff;

      .btn {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
      }
    }

    .container {
      position: relative;
      display: flex;
      height: 100%;
      overflow: hidden;
      width: 100% !important;
      max-width: 105vw;

      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        height: 100%;
        user-select: none;
      }

      .pic {
        transform: all 200ms ease;
        .pic-enter {
          transform: translateX(
            ${(props) => (props.isNext ? '100%' : '-100%')}
          );
          opacity: 0;
        }

        .pic-enter-active {
          transform: translate(0);
          opacity: 1;
        }

        .pic-exit {
          opacity: 1;
        }

        .pic-exit-active {
          opacity: 0;
        }
      }
    }
  }

  .preview {
    flex: 1;
    justify-content: center;
    height: 100px;
    margin-top: 10px;

    .info {
      justify-content: center;
      position: relative;
      margin: 0 auto;
      bottom: 10px;
      max-width: 46.5vw;
      color: #fff;

      .desc {
        display: flex;
        justify-content: space-between;

        .toggle {
          cursor: pointer;
        }
      }

      .list {
        margin-top: 3px;
        overflow: hidden;
        transition: height 300ms ease;
        height: ${(props) => (props.showlist ? '67px' : 0)};

        .item {
          margin-right: 15px;
          cursor: pointer;

          img {
            height: 67px;
            opacity: 0.5;
          }

          &.active {
            img {
              opacity: 1;
            }
          }
        }
      }
    }
  }
`
