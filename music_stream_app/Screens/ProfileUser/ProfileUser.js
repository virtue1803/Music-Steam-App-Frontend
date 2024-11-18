import React, { useState, useEffect, useRef } from "react";
import { View, Text, Modal, StyleSheet, Dimensions, Animated, PanResponder, TouchableOpacity, Pressable, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function ProfileUser(props) {
  const { visible, onClose, navigation } = props;
  const { width, height } = Dimensions.get("window");
  const slideAnim = useRef(new Animated.Value(width)).current;  // Đặt giá trị ban đầu là width

  useEffect(() => {
    if (visible) {
      slideAnim.setValue(width);  // Bắt đầu từ ngoài màn hình ở bên phải
      Animated.timing(slideAnim, {
        toValue: 0,  // Di chuyển vào màn hình
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: width,  // Di chuyển ra ngoài màn hình ở bên phải
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        return Math.abs(gestureState.dx) > Math.abs(gestureState.dy);
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 100) {
          Animated.timing(slideAnim, {
            toValue: width,  // Di chuyển ra ngoài màn hình ở bên phải
            duration: 300,
            useNativeDriver: true,
          }).start(() => onClose()); // Đóng modal sau khi di chuyển
        } else {
          Animated.timing(slideAnim, {
            toValue: 0,  // Trở lại vị trí ban đầu
            duration: 300,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  return (
    <Modal transparent={true} visible={visible} onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <Animated.View
          {...panResponder.panHandlers}
          style={[styles.modalView, { transform: [{ translateX: slideAnim }] }]}>

          <View style={styles.header}>
            <Pressable style={styles.profileSection}>
              <View style={styles.profileIcon}>
                 <Image
                   style={styles.profileImage}
                   source={require('../../assets/Home - Audio Listing/Avatar 3.png')} 
                 />
              </View>
              <View>
                <Text style={styles.profileName}>Nguyễn Văn Tèo</Text>
              </View>
            </Pressable>
          </View>

          <View style={styles.footer}>
            <TouchableOpacity onPress={onClose} style={styles.cancelButton}>
              <Text style={styles.cancelButtonText}>Hủy</Text>
            </TouchableOpacity>

           <TouchableOpacity
              style={styles.logoutButton}
              onPress={() => {
                // Chuyển đến màn hình đăng ký và đóng modal Logout
                navigation.navigate("LaunchScreen");
                onClose();
              }}>
              <Text style={styles.logoutButtonText}>Đăng xuất</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",  // Đảm bảo modal căn phải
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    width: "80%", // Điều chỉnh kích thước modal cho phù hợp
    height: "100%",
    backgroundColor: "#232323",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: "absolute",
    top: 0,
    right: 0,  // Đặt modal vào vị trí bên phải
    zIndex: 1000,
    flexDirection: 'column',
    justifyContent: 'space-between',  // Đảm bảo các thành phần được sắp xếp dọc
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#B4A8A8",
    paddingRight: 20,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 15,
    padding: 15,
  },
  profileIcon: {
    width: 50,
    height: 50,
    justifyContent: "center",
    borderRadius: 30,
  },
  profileImage: {
    width: 30,
    height: 30,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  profileName: {
    fontSize: 22,
    fontWeight: "600",
    color: "#fff",
  },
  footer: {
    position: "absolute",
    bottom: 30, // Căn dưới cùng
    left: 0,
    right: 0,
    paddingHorizontal: 20, // Khoảng cách 2 bên
    alignItems: "center", // Căn giữa các nút
  },
  cancelButton: {
    backgroundColor: "#444",
    width: "100%",
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  cancelButtonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
  logoutButton: {
    backgroundColor: "#565656",
    width: "100%",
    paddingVertical: 10,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
});

export default ProfileUser;
