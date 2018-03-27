import React from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';

class PyramidShape extends React.Component {
  constructor(props, context) {
    super(props, context);

    // construct the position vector here, because if we use 'new' within render,
    // React will think that things have changed when they have not.
    this.cameraPosition = new THREE.Vector3(0, 0, 5);

    this.state = {
      pyramidRotation: new THREE.Euler(),
      xRotation: 0.1,
      yRotation: 0.1
    };

    this._onAnimate = () => {
      // we will get this callback every frame

      // pretend pyramidRotation is immutable.
      // this helps with updates and pure rendering.
      // React will be sure that the rotation has now updated.
      // let rotate = this.props.shapeSpeed/400
      this.setState({
        pyramidRotation: new THREE.Euler(
          this.state.pyramidRotation.x + this.props.shapeSpeedX/400,
          this.state.pyramidRotation.y + this.props.shapeSpeedY/400,
          0
        ),
      });
    };
  }

  render() {
    let radius = this.props.shapeSpeed/400
    const width = window.innerWidth * 0.75; // canvas width
    const height = window.innerHeight * 0.75; // canvas height

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
          rotation={this.state.pyramidRotation}
        >
          <octahedronGeometry
            radius={2}
            detail={0}
          />
          <meshBasicMaterial
            wireframe={true}
            color={0x12F8FF}
          />
        </mesh>
      </scene>
    </React3>);
  }
}

export default PyramidShape;
