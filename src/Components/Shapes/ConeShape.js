import React from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';

class ConeShape extends React.Component {
  constructor(props, context) {
    super(props, context);

    // construct the position vector here, because if we use 'new' within render,
    // React will think that things have changed when they have not.
    this.cameraPosition = new THREE.Vector3(0, 0, 125);

    this.state = {
      coneRotation: new THREE.Euler(),
    };

    this._onAnimate = () => {
      // we will get this callback every frame

      // pretend coneRotation is immutable.
      // this helps with updates and pure rendering.
      // React will be sure that the rotation has now updated.
      this.setState({
        coneRotation: new THREE.Euler(
          this.state.coneRotation.x + this.props.shapeSpeedY/10,
          this.state.coneRotation.y + this.props.shapeSpeedX/10,
          0
        ),
      });
    };
  }

  render() {
    const width = window.innerWidth * 0.75; // canvas width
    const height = window.innerHeight * 0.75; // canvas height
// let depth = this.props.shapeSpeedW/10
    return (<React3
      mainCamera="camera" // this points to the perspectiveCamera which has the name set to "camera" below
      width={width}
      height={height}

      onAnimate={this._onAnimate}
    >
      <scene>
        <perspectiveCamera
          name="camera"
          fov={75}
          aspect={width / height}
          near={0.1}
          far={1000}

          position={this.cameraPosition}
        />
        <mesh
          rotation={this.state.coneRotation}
        >
        <sphereGeometry
             radius={this.props.shapeSpeedW/10}
             widthSegments={20}
             heightSegments={10}
           />
          <meshBasicMaterial
            wireframe={true}
            color={0x00ff00}
          />
        </mesh>
      </scene>
    </React3>);
  }
}

export default ConeShape;
