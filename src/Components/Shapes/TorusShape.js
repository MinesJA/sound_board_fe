import React, { Component } from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';

class TorusShape extends Component {
  constructor(props, context) {
    super(props, context);

    // construct the position vector here, because if we use 'new' within render,
    // React will think that things have changed when they have not.
    this.cameraPosition = new THREE.Vector3(0, 0, 60);

    this.state = {
      torusRotation: new THREE.Euler(),
    };

    this._onAnimate = () => {
      // we will get this callback every frame

      // pretend torusRotation is immutable.
      // this helps with updates and pure rendering.
      // React will be sure that the rotation has now updated.
      let rotate = this.props.shapeSpeed/300
      this.setState({
        torusRotation: new THREE.Euler(
          this.state.torusRotation.x + rotate,
          this.state.torusRotation.y + rotate,
          0
        ),
      });
    };
  }

  render() {
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
          fov={45}
          aspect={width / height}
          near={0.1}
          far={2000}

          position={this.cameraPosition}
        />
        <mesh
          rotation={this.state.torusRotation}
        >
          <torusGeometry
            radius={9}
            tube={3}
            radialSegments={3}
            tubularSegments={3}
          />
          <meshBasicMaterial

            color={0xEBEE35}
          />
        </mesh>
      </scene>
    </React3>);
  }
}

export default TorusShape;
